import React, { useEffect, useState } from 'react';

const Toast = ({ message, isVisible, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShow(true);
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setShow(false);
        }
    }, [isVisible, onClose]);

    if (!show && !isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '50px',
            right: '20px',
            backgroundColor: 'white',
            color: '#333',
            padding: '15px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 1000,
            transform: show ? 'translateX(0)' : 'translateX(120%)',
            transition: 'transform 0.3s ease-in-out',
            borderLeft: '5px solid #007600',
            minWidth: '250px',
            fontSize: '15px',
        }}>
            <span style={{ color: '#007600', fontSize: '18px' }}>✅</span>
            <span style={{ fontWeight: '500' }}>{message}</span>
        </div>
    );
};

export default Toast;
