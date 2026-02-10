import React, { useState } from 'react';
import styles from './Auth.module.css';

const SignupForm = ({ onSwitch }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Enter your name';

        if (!formData.email) {
            newErrors.email = 'Enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Enter your password';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Signup Data:', formData);
            // Here you would typically call a signup API
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <div className={styles.authCard}>
            <h2 className={styles.title}>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Your name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="First and last name"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className={styles.error}>{errors.name}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Mobile number or email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="At least 6 characters"
                        className={styles.input}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className={styles.error}>{errors.password}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword" className={styles.label}>Re-enter password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className={styles.input}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
                </div>

                <button type="submit" className={styles.submitButton}>Verify mobile number</button>
            </form>

            <div className={styles.divider}>
                <span className={styles.dividerText}>Already have an account?</span>
            </div>

            <button onClick={onSwitch} className={styles.switchButton}>
                Sign in
            </button>
        </div>
    );
};

export default SignupForm;
