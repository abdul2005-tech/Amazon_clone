/* ========================================
   pages/SignIn/SignIn.jsx
   Sign In Page Component
   ======================================== */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, Input, Button } from '../../components/ui';
import { useAuth } from '../../context';
import './SignIn.css';

/**
 * SignIn Page Component
 * Handles user authentication login flow
 */
const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { signIn, isAuthenticated } = useAuth();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // Sign in using auth context
            signIn(formData.email, formData.password);

            // Redirect to home/dashboard after successful login
            navigate('/');
        } catch (error) {
            setErrors({ general: 'Invalid email or password' });
        } finally {
            setIsLoading(false);
        }
    };

    const footerContent = (
        <div className="signin-footer">
            <p className="signin-footer-text">New to Amazon?</p>
            <Button
                variant="secondary"
                fullWidth
                onClick={() => navigate('/signup')}
            >
                Create your Amazon account
            </Button>
        </div>
    );

    return (
        <div className="signin-page">
            <FormWrapper title="Sign in" onSubmit={handleSubmit} footer={footerContent}>
                {errors.general && (
                    <div className="signin-error-banner">
                        {errors.general}
                    </div>
                )}

                <Input
                    type="email"
                    name="email"
                    label="Email or mobile phone number"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                />

                <Input
                    type="password"
                    name="password"
                    label="Password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    required
                />

                <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    loading={isLoading}
                >
                    Sign in
                </Button>

                <div className="signin-keep-signed">
                    <label className="signin-checkbox">
                        <input type="checkbox" />
                        <span>Keep me signed in.</span>
                    </label>
                    <a href="#" className="text-link signin-details-link">
                        Details
                    </a>
                </div>

                <div className="signin-help">
                    <a href="#" className="text-link">
                        Forgot your password?
                    </a>
                </div>
            </FormWrapper>
        </div>
    );
};

export default SignIn;
