import React from 'react'
import { useState,useEffect } from "react";
import { WeatherSvg } from "weather-icons-animated";
export const DayIcon = (props) => {
    // console.log(props.data);
    const [icon,setIcon]=new useState('sunny');

    useEffect(()=>{
        switch (props.data) {
            case "Haze":
              setIcon('partlycloudy');
              break;
            case "Clouds":
              setIcon('cloudy' );
              break;
            case "Rain":
              setIcon('rainy');
              break;
            case "Snow":
              setIcon('snowy');
              break;
            case "Dust":
              setIcon('windy');
              break;
            case "Drizzle":
              setIcon('rainy');
              break;
            case "Fog":
              setIcon('fog');
              break;
            case "Smoke":
              setIcon('fog');
              break;
            case "Tornado":
              setIcon('windy-variant');
              break;
            default:
              setIcon('sunny');
          }
    },[])

  return (
    
        <WeatherSvg
    height={props.h}
    width={props.w}
    state={icon}
    animate={true} />
    
  )
}
export default DayIcon
