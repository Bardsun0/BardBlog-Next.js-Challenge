const Button = ({ children, className = "", ...props }) => (
  <button
    className={`bg-blue-600 text-white px-8 py-3 rounded-full 
                hover:bg-blue-700 dark:hover:bg-blue-500 
                transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
