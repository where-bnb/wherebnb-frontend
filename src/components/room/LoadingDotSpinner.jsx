const LoadingDotsSpinner = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="animate-bounce h-2 w-2 bg-gray-800 rounded-full"></div>
      <div className="animate-bounce200 h-2 w-2 bg-gray-800 rounded-full"></div>
      <div className="animate-bounce400 h-2 w-2 bg-gray-800 rounded-full"></div>
    </div>
  );
};

export default LoadingDotsSpinner;
