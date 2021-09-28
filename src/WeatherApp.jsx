
import { useEffect, useState } from 'react';
import './weatherApp.scss';

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=70fd0d8e4091568e4be8ed5a3aafb3dd`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    }
    fetchApi();
  }, [search]);


  const inputEvent = (eve) => {
    const cityName = eve.target.value;
    console.log(cityName);
    setSearch(cityName);
  };

  return (
    <div className="weatherApp">
      <h1>Weather App</h1>
      <div className="form-group">
        <label>Search City</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={inputEvent}
          value={search}
        />
      </div>
      <hr />
      {!city ? (
        <p>No data found</p>
      ) : (
        <>
          <h2>Results</h2>
          <h3>{search}</h3>
          <h1>temp : {city.temp}C</h1>
          <h4>
            Min : {city.temp_min}C | max : {city.temp_max}C
          </h4>
        </>
      )}
    </div>
  );
}

export default WeatherApp;
