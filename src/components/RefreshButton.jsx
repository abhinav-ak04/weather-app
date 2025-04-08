import { FiRefreshCcw } from 'react-icons/fi';
function RefreshButton({ city, fetchWeather }) {
  return (
    <button
      onClick={() => city && fetchWeather(city)}
      className="mb-2 flex items-center gap-2 rounded-lg px-3 py-1 font-semibold text-zinc-800 transition-all duration-200 hover:scale-105 hover:bg-gray-200"
    >
      <FiRefreshCcw className="animate-spin-once text-lg" />
      <p>Refresh</p>
    </button>
  );
}

export default RefreshButton;
