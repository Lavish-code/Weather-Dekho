import React from 'react'
import './Dayforecast.css'
import Daydata from './Daydata'

const Dayforecast = (props) => {
  const d1=props.data.list[0];
  const d2=props.data.list[6];
  const d3=props.data.list[12];
  const d4=props.data.list[18];
  const d5=props.data.list[24];

  
  return (
    <div className='dayforecast'>
        <h2>5 Days Forecast</h2>
        <Daydata data={d1} />
        <Daydata data={d2} />
        <Daydata data={d3} />
        <Daydata data={d4} />
        <Daydata data={d5} />
    </div>
  )
}

export default Dayforecast