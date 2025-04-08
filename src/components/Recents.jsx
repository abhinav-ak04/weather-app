function Recents({ recentCities, fetchWeather }) {
  function capitalizeWords(city) {
    return city
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    <div className="my-4">
      <h3 className="mb-2 font-semibold text-gray-600">Recent Searches:</h3>
      <div className="flex flex-wrap gap-2">
        {recentCities.map((c) => (
          <button
            key={c}
            onClick={() => fetchWeather(c)}
            className="cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
          >
            {capitalizeWords(c)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Recents;
