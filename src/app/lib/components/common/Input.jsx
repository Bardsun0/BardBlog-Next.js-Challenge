const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-2 text-sm 
                border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
                rounded-md 
                focus:outline-none focus:ring-2 
                focus:ring-gray-300 dark:focus:ring-gray-600 
                transition-all disabled:opacity-50 ${className}`}
    {...props}
  />
);

export default Input;
