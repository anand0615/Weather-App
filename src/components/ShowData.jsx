import React from 'react';
import CardData from './CardData';

const ShowData = ({ data }) => {
  if (!data) {
    return <div className="text-center text-xl font-bold mt-10">Loading...</div>;
  }

  const { main, wind, coord, weather, name } = data;

  return (
    <div className="p-3 text-center">

      <div className="flex justify-between flex-wrap">

        {/* City Name */}
        <div className="p-3 text-8xl drop-shadow-lg bg-gray-200 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
          {name}
        </div>

        {/*lon, lat, wind speed */}
        <div className="p-4 flex flex-wrap gap-3 justify-around">
          <CardData title="Latitude" titleData={coord.lat} />
          <CardData title="Longitude" titleData={coord.lon} />
          <CardData title="Wind Speed" titleData={`${wind.speed} km/h`} />
        </div>

      </div>

      {/* Weather details */}
      <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3">

        {/* Left content */}
        <div className="p-5 w-full md:w-2/4 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
          <CardData title="Temperature" titleData={`${main.temp}°C`} />
          <CardData title="Feels Like" titleData={`${main.feels_like}°C`} />
          <CardData title="Humidity" titleData={`${main.humidity}%`} />
          <CardData title="Pressure" titleData={`${main.pressure} hPa`} />
          <CardData title="Max Temp." titleData={`${main.temp_max}°C`} />
          <CardData title="Min Temp." titleData={`${main.temp_min}°C`} />
        </div>

        {/* Right content */}
        <div className="p-3 w-full md:w-2/4 flex justify-center shadow-2xl rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
          {weather.map((w, index) => (
            <div key={index} className="p-3 grid grid-cols-1 gap-6">
              <CardData title={`Weather ${index+1}`} titleData={w.main} />
              <CardData title={`Description ${index+1}`} titleData={w.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowData;
