import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weatherdashboard.css";
import DateandTime from "./Components/DateandTime/DateandTime";
import Weather from "./Components/Weather/Weather";
import Dayforecast from "./Components/Dayforecast/Dayforecast";
import Hourforecast from "./Components/Hourforecast/Hourforecast";
import search from "./images/search.svg";

const Weatherdashboard = () => {
  const apiKey = "2e400cdde9f63cb8f6be13b124885f6d";

  const [city, setCity] = useState('delhi');
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchedCity, setSearchedCity] = useState('delhi');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    setSearchedCity(city);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setCityData(result);
      console.log(cityData);
     
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  if (loading) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="weatherdashboard">
      <div className="search-bar">
        <form>
          <img src={search} alt="Search Icon" />
          <input 
            type="text" 
            placeholder="Search City" 
            onChange={(e) => setCity(e.target.value)} 
            onKeyPress={handleKeyPress} // Add this line
          />
        </form>
        <input type="button" value="Search" onClick={handleSubmit} />
      </div>
      <div className="sec">
        <DateandTime city={searchedCity} />
        <Weather data={cityData.list[0]} />
      </div>
      <div className="sec">
        <Dayforecast data={cityData} />
        <Hourforecast data={cityData} />
      </div>
      <footer>
        <h5> Copyright &copy; 2023 Weather Dekho. Designed and Developed by <a
        href="https://github.com/Lavish-code"> Lavish Yadav</a></h5>
      </footer>
    </div>
  );
};

export default Weatherdashboard;
