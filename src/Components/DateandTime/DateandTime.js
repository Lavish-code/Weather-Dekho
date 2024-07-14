import React from 'react'
import './DateandTime.css'
import { useState, useEffect } from 'react'


const DateandTime = (props) => {

  const d=new Date();
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${date} ${month} `;
  };

    const [currentTime, setCurrentTime] = useState(d);
  
    useEffect(() => {
      // Update the current time every second
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  

  return (
    <div className='dt'>
        <div className='place'>{props.city.charAt(0).toUpperCase()+props.city.slice(1)}</div>
        <div className='time'>{currentTime.toLocaleTimeString()}</div>
        <div className='date'>{dateBuilder(d)}</div>
    </div>
  )
}
export default DateandTime
