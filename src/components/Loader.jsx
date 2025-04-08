function Loader() {
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="mb-2 h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      <p className="text-sm text-gray-900 dark:text-gray-300">
        Fetching weather data...
      </p>
    </div>
  );
}

export default Loader;
