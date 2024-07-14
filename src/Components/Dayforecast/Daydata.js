import React from 'react'
import DayIcon from '../dayIcon/DayIcon'

const Daydata = (props) => {
  // console.log(props);
  return (
    <div className='daydata'>
        <DayIcon data={props.data.weather[0].main} h= "64px" w="64px"/>
        <p>{Math.round(props.data.main.temp-273.15)}°C</p>
        <p>{props.data.dt_txt.split(' ')[0]}</p>
    </div>
  )
}

export default Daydata