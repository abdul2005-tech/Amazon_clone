import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../Components/Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ message: '', visible: false });

    const showToast = useCallback((message) => {
        setToast({ message, visible: true });
    }, []);

    const hideToast = useCallback(() => {
        setToast((prev) => ({ ...prev, visible: false }));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast
                message={toast.message}
                isVisible={toast.visible}
                onClose={hideToast}
            />
        </ToastContext.Provider>
    );
};
