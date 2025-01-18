const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <p className="text-red-600 dark:text-red-400">{message}</p>
    </div>
  );
};

export default ErrorMessage;
