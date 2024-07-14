import React from 'react'
import DayIcon from '../dayIcon/DayIcon'
import navigation from '../../images/navigation.svg'

const Hourdata = (props) => {
  return (
    <div className='hour-data'>
        <h3>{props.time}</h3>
        <div>
        <DayIcon data={props.data.weather[0].main} h='64px' w='64px' />
        <p>{Math.round(props.data.main.temp-273.15)}°C</p>
        </div>
        <div>
        <img src={navigation} />
        <p>{props.data.wind.speed}Km/h</p>
        </div>
    </div>
  )
}

export default Hourdata
