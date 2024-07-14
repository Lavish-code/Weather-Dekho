import React from "react";
import DayIcon from "../dayIcon/DayIcon";
import "./Weather.css";
import clear from "../../images/clear.svg";
import sunset from "../../images/sunset.svg";
import sunrise from "../../images/sunrise.svg";
import humidity from "../../images/humidity.svg";
import wind from "../../images/wind.svg";
import pressure from "../../images/pressure.svg";
import uv from "../../images/uv.svg";

const Weather = (props) => {
  const temp=Math.round(props.data.main.temp-273.15);
  const ftemp=Math.round(props.data.main.feels_like-273.15);
  const humidity1=props.data.main.humidity;
  const wind1=props.data.wind.speed;
  const pressure1=props.data.main.pressure;
 
  
  // const uv1=props.data.uvi;
  // const sunRise=Math.round(props.data.sys.sunrise);
  // const sunSet=Math.round(props.data.sys.sunset);
  // console.log(props.data.temp);
  return (
    <div className="weather">
      <div className="temp-day">
        <div className="temp-con">
          <div className="temp">
            <h1>{temp} °C</h1>
            <span>Feels like: <span>{ftemp} °C</span> </span>
          </div>
          <div className="sun">
          <img className="w-img" src={sunrise}></img>
            <div className="sun-text">
              <p>Sunrise</p>
              <h3>6:00 AM</h3>
            </div>
          </div>
          <div className="sun">
            <img className="w-img" src={sunset}></img>
            <div className="sun-text">
              <p>Sunset</p>
              <h3>6:00 PM</h3>
            </div>
          </div>
        </div>
        <div className="day">
          {/* <img src={`https://openweathermap.org/img/wn/${iconCode}.png`} className="day-img" draggable="false"/> */}
          <DayIcon data={props.data.weather[0].main} h="128px" w="128px"/>
          <div className="day-desc" >{props.data.weather[0].main[0].toUpperCase()+props.data.weather[0].main.slice(1)}</div>
        </div>
      </div>
      <div className="weather-details">
        <div>
          <div className="w-detail">
          <img className="w-img" src={humidity}></img>
            <h4>{humidity1}%</h4>
            <p>Humidity</p>
          </div>
          <div className="w-detail">
          <img className="w-img" src={wind}></img>
            <h4>{wind1.toFixed(1)}Km/h</h4>
            <p>Wind Speed</p>
          </div>
        </div>
        <div>
          <div className="w-detail">
          <img className="w-img" src={pressure}></img>
            <h4>{Math.round(pressure1)}hpa</h4>
            <p>Pressure</p>
          </div>
          <div className="w-detail">
          <img className="w-img" src={uv}></img>
            <h4>8</h4>
            <p>UV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
