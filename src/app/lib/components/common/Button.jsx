const Button = ({ children, className = "", ...props }) => (
  <button
    className={`custom-button px-8 py-3 rounded-full ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
