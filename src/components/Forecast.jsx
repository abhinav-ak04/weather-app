function Forecast({ forecast }) {
  if (!forecast) return null;

  const daily = forecast.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="my-6">
      <h3 className="mb-2 text-xl font-semibold">5-Day Forecast</h3>
      <div className="flex gap-4 overflow-x-auto">
        {daily.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[120px] rounded bg-blue-100 p-4 shadow"
          >
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="weather icon"
              className="mx-auto w-10"
            />
            <p>{item.main.temp}°C</p>
            <p className="text-sm">{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
