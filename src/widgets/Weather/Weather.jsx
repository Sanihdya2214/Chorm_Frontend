import React, { useState } from "react";

const apiKey = "32b40b115c47d06fec6b9dc66735a47c";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const search = (e) => {
    e.preventDefault();
    setLoadingWeather(true);
    fetch(`${apiUrl}/weather?q=${query}&units=metric&APPID=${apiKey}`)
      .then((response) => {
        if (response.status !== 200) {
          setWeather("");
          setLoadingWeather(false);
          return false;
        }
        response.json().then((result) => {
          setWeather(result);
          setLoadingWeather(false);
          setShowBar(false);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setInputRefFocus = (input) => {
    if (input != null) {
      input.focus();
    }
  };

  const openSearchBox = () => {
    setQuery("");
    setShowBar(true);
  };

  const closeSearchBox = () => {
    setShowBar(false);
    setQuery("");
  };

  return (
    <div className="card flex flex-col items-center rounded-2xl w-full h-auto p-4 bg-gradient-to-br from-gray-900 to-blue-700 shadow-lg transition ease-out duration-300">
      <div
        className={`search-box ${
          showBar ? "bar-shown" : "bar-not-shown"
        } bg-white bg-opacity-50 rounded-lg transition ease-in-out duration-300 flex items-center justify-center w-full relative`}
      >
        <form onSubmit={search} className="flex w-full">
          <input
            type="text"
            className="search-bar p-4 flex-1 bg-none border-none outline-none rounded-lg text-gray-800 text-lg transition ease duration-200"
            placeholder="Search for a city"
            onChange={(e) => setQuery(e.target.value)}
            ref={setInputRefFocus}
            value={query}
          />
        </form>
        <button
          className="btn-close absolute top-2 right-2 bg-transparent border-none p-2 text-lg"
          onClick={closeSearchBox}
        >
          X
        </button>
      </div>
      <button
        style={{ opacity: showBar ? "0" : "1" }}
        className="btn-search bg-white border-none font-bold text-gray-900 py-1 px-2 rounded mt-4 transition ease-in-out duration-200"
        onClick={openSearchBox}
      >
        Search
      </button>
      {weather ? (
        <div className="weather-widget text-center text-white mt-4">
          <div className="weather-box flex items-center justify-center">
            <div className="temp mr-4 text-4xl font-bold text-left">
              <div className="celcius mb-1">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="main text-2xl">{weather.weather[0].main}</div>
            </div>
            <div className="weather-icon">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="w-28 h-28"
              />
            </div>
          </div>
          <div className="location text-2xl py-1.5">
            {weather.name}, {weather.sys.country}
          </div>
        </div>
      ) : (
        <div className="weather-widget text-center text-white mt-4">
          {loadingWeather ? (
            <h4 className="clean-search">Loading data...</h4>
          ) : (
            <h3 className="clean-search">Search for a proper city name</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
