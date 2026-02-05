/* ========================================
   pages/SignUp/SignUp.jsx
   Sign Up Page Component
   ======================================== */

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormWrapper, Input, Button } from '../../components/ui';
import { useAuth } from '../../context';
import './SignUp.css';

/**
 * SignUp Page Component
 * Handles new user registration flow
 */
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { signUp, isAuthenticated } = useAuth();

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

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Passwords must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please re-enter your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords must match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // Sign up using auth context
            signUp(formData.name, formData.email, formData.password);

            // Redirect to home/dashboard after successful registration
            navigate('/');
        } catch (error) {
            setErrors({ general: 'Registration failed. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const footerContent = (
        <div className="signup-footer">
            <p className="signup-footer-text">
                Already have an account?{' '}
                <Link to="/signin" className="text-link">
                    Sign in
                </Link>
            </p>
        </div>
    );

    return (
        <div className="signup-page">
            <FormWrapper
                title="Create account"
                onSubmit={handleSubmit}
                footer={footerContent}
            >
                {errors.general && (
                    <div className="signup-error-banner">
                        {errors.general}
                    </div>
                )}

                <Input
                    type="text"
                    name="name"
                    label="Your name"
                    placeholder="First and last name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                />

                <Input
                    type="email"
                    name="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                />

                <Input
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="At least 6 characters"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    helperText="Passwords must be at least 6 characters"
                    required
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    label="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    required
                />

                <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    loading={isLoading}
                >
                    Create your Amazon account
                </Button>

                <div className="signup-buying-notice">
                    <p>
                        By creating an account, you agree to Amazon's{' '}
                        <a href="#" className="text-link">Conditions of Use</a> and{' '}
                        <a href="#" className="text-link">Privacy Notice</a>.
                    </p>
                </div>
            </FormWrapper>
        </div>
    );
};

export default SignUp;
