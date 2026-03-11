/* ========================================
   components/ui/FormWrapper/FormWrapper.jsx
   Reusable Form Wrapper Component
   ======================================== */

import './FormWrapper.css';

/**
 * FormWrapper Component
 * Provides consistent styling for auth forms (SignIn, SignUp)
 * @param {Object} props
 * @param {string} props.title - Form title
 * @param {React.ReactNode} props.children - Form content
 * @param {React.ReactNode} props.footer - Footer content (links, etc.)
 * @param {function} props.onSubmit - Form submit handler
 * @param {string} props.className - Additional CSS classes
 */
const FormWrapper = ({
    title,
    children,
    footer,
    onSubmit,
    className = '',
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(e);
        }
    };

    return (
        <div className="form-wrapper-container">
            <div className="form-wrapper-logo">
                <img
                    src="/src/Components/logo.png"
                    alt="Amazon Logo"
                    className="form-wrapper-logo-img"
                />
            </div>

            <div className={`form-wrapper ${className}`}>
                {title && <h1 className="form-wrapper-title">{title}</h1>}

                <form onSubmit={handleSubmit} className="form-wrapper-form">
                    {children}
                </form>

                {footer && (
                    <div className="form-wrapper-footer">
                        {footer}
                    </div>
                )}
            </div>

            <div className="form-wrapper-terms">
                <p>
                    By continuing, you agree to Amazon's{' '}
                    <a href="#" className="text-link">Conditions of Use</a> and{' '}
                    <a href="#" className="text-link">Privacy Notice</a>.
                </p>
            </div>
        </div>
    );
};

export default FormWrapper;
