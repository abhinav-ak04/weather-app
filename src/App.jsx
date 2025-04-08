import { motion } from 'framer-motion';
import { useState } from 'react';
import Error from './components/Error';
import Forecast from './components/Forecast';
import Loader from './components/Loader';
import Recents from './components/Recents';
import RefreshButton from './components/RefreshButton';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const API_KEY = '40b311a206e0b8202eca0ed4a8555243';

export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [recentCities, setRecentCities] = useState(() => {
    const stored = localStorage.getItem('recentCities');
    return stored ? JSON.parse(stored) : [];
  });
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError('City name cannot be empty.');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      // Fetch current weather data
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
      );

      const data = await res.json();

      if (!res.ok || data.cod === '404') {
        setError('City not found. Please try again.');
        return;
      }

      // Fetch forecast data
      setWeatherData(data);
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`,
      );
      const forecastData = await forecastRes.json();
      setForecast(forecastData);
      setCity(cityName);

      // Update recentCities
      setRecentCities((prev) => {
        const updated = [cityName, ...prev.filter((c) => c !== cityName)].slice(
          0,
          5,
        );
        localStorage.setItem('recentCities', JSON.stringify(updated));
        return updated;
      });
    } catch (err) {
      setError(err?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-400 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h1 className="mb-4 text-center text-2xl font-bold">
          🌤️ Weather Dashboard
        </h1>

        <RefreshButton city={city} fetchWeather={fetchWeather} />

        <SearchBar onSearch={fetchWeather} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Recents recentCities={recentCities} fetchWeather={fetchWeather} />
        </motion.div>

        {loading && <Loader />}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Error message={error} />
          </motion.div>
        )}

        {weatherData && !loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WeatherCard data={weatherData} />
          </motion.div>
        )}

        {weatherData && !loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {' '}
            <Forecast forecast={forecast} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
