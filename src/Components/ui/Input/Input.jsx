/* ========================================
   components/ui/Input/Input.jsx
   Reusable Input Component
   ======================================== */

import { useState } from 'react';
import './Input.css';

/**
 * Input Component
 * @param {Object} props
 * @param {string} props.type - Input type: 'text' | 'email' | 'password' | 'tel' | 'number'
 * @param {string} props.name - Input name attribute
 * @param {string} props.id - Input id attribute
 * @param {string} props.label - Label text
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change handler
 * @param {function} props.onBlur - Blur handler
 * @param {string} props.error - Error message
 * @param {string} props.helperText - Helper text below input
 * @param {boolean} props.required - Whether input is required
 * @param {boolean} props.disabled - Whether input is disabled
 * @param {string} props.className - Additional CSS classes
 */
const Input = ({
    type = 'text',
    name,
    id,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    helperText,
    required = false,
    disabled = false,
    className = '',
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || name;

    const inputClasses = [
        'input-field',
        error && 'input-field--error',
        disabled && 'input-field--disabled',
        className
    ].filter(Boolean).join(' ');

    const isPasswordType = type === 'password';
    const inputType = isPasswordType && showPassword ? 'text' : type;

    return (
        <div className="input-wrapper">
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                    {required && <span className="input-required">*</span>}
                </label>
            )}

            <div className="input-container">
                <input
                    type={inputType}
                    name={name}
                    id={inputId}
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    required={required}
                    {...rest}
                />

                {isPasswordType && (
                    <button
                        type="button"
                        className="input-toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                )}
            </div>

            {(error || helperText) && (
                <span className={`input-message ${error ? 'input-message--error' : ''}`}>
                    {error || helperText}
                </span>
            )}
        </div>
    );
};

export default Input;
