/* ========================================
   context/AuthContext.jsx
   Authentication Context Provider
   ======================================== */

import { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext(null);

/**
 * AuthProvider Component
 * Provides authentication state and methods to the entire app
 */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check localStorage for existing user on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('amazon_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                localStorage.removeItem('amazon_user');
            }
        }
        setIsLoading(false);
    }, []);

    // Sign In function
    const signIn = (email, password) => {
        // Mock authentication - in real app, this would call an API
        const userData = {
            id: Date.now(),
            email: email,
            name: email.split('@')[0], // Extract name from email
        };

        setUser(userData);
        localStorage.setItem('amazon_user', JSON.stringify(userData));
        return userData;
    };

    // Sign Up function
    const signUp = (name, email, password) => {
        // Mock registration - in real app, this would call an API
        const userData = {
            id: Date.now(),
            email: email,
            name: name,
        };

        setUser(userData);
        localStorage.setItem('amazon_user', JSON.stringify(userData));
        return userData;
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('amazon_user');
    };

    // Check if user is authenticated
    const isAuthenticated = !!user;

    const value = {
        user,
        isLoading,
        isAuthenticated,
        signIn,
        signUp,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * useAuth Hook
 * Custom hook to access auth context
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
