import React, { useState } from 'react';
import styles from './Auth.module.css';

const LoginForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Enter your password';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login Data:', formData);
      // Here you would typically call an auth API
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className={styles.authCard}>
      <h2 className={styles.title}>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email or mobile phone number</label>
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
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className={styles.error}>{errors.password}</div>}
        </div>
        <button type="submit" className={styles.submitButton}>Sign in</button>
      </form>
      
      <div className={styles.divider}>
        <span className={styles.dividerText}>New to Amazon?</span>
      </div>
      
      <button onClick={onSwitch} className={styles.switchButton}>
        Create your Amazon account
      </button>
    </div>
  );
};

export default LoginForm;
