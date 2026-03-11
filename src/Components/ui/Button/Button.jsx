/* ========================================
   components/ui/Button/Button.jsx
   Reusable Button Component
   ======================================== */

import './Button.css';

/**
 * Button Component
 * @param {Object} props
 * @param {string} props.type - Button type: 'button' | 'submit' | 'reset'
 * @param {string} props.variant - Button style: 'primary' | 'secondary' | 'outline' | 'text'
 * @param {string} props.size - Button size: 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Whether button takes full width
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.loading - Whether button shows loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  className = '',
  ...rest
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    disabled && 'btn--disabled',
    loading && 'btn--loading',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="btn__spinner"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
