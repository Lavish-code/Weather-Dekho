import React from 'react'

import './Hourforecast.css'
import Hourdata from './Hourdata'

const Hourforecast = (props) => {
  const h1=props.data.list[0];
  const h2=props.data.list[1];
  const h3=props.data.list[2];
  const h4=props.data.list[3];
  const h5=props.data.list[4];
  return (
    <div className='hourforecast'>
      <h2>Hourly Forecast</h2>
      <div className='hw-details'>
      <Hourdata data={h1} time='9:00' />
      <Hourdata data={h2} time='12:00' />
      <Hourdata data={h3} time='15:00' />
      <Hourdata data={h4} time='18:00' />
      <Hourdata data={h5} time='21:00' />
      </div>
    </div>
  )
}

export default Hourforecast