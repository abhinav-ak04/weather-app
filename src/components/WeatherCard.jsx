function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="rounded-lg bg-blue-100 p-4 text-center shadow-md">
      <h2 className="mb-2 text-xl font-bold">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg">{weather[0].main}</p>
      <p className="text-3xl font-bold">{main.temp}°C</p>
      <div className="mt-2 space-y-1 text-sm text-gray-700">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} km/h</p>
      </div>
    </div>
  );
}
export default WeatherCard;
