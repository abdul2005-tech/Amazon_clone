import React, { useState } from 'react';
import LoginForm from '../Components/Auth/LoginForm';
import SignupForm from '../Components/Auth/SignupForm';
import styles from '../Components/Auth/Auth.module.css';

const AccountPage = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleSwitchToSignup = () => setActiveTab('signup');
    const handleSwitchToLogin = () => setActiveTab('login');

    return (
        <div className={styles.authContainer}>
            <div style={{ textAlign: 'center' }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon Logo"
                    className={styles.logo}
                />
                {activeTab === 'login' ? (
                    <LoginForm onSwitch={handleSwitchToSignup} />
                ) : (
                    <SignupForm onSwitch={handleSwitchToLogin} />
                )}
            </div>
        </div>
    );
};

export default AccountPage;
