import React from 'react'
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
export default function Displaydata({weather}) {
  console.log(weather)
  return (
    <div className="my-5 py-3" style={{backgroundColor:"#00000036"}}>
       <h3>{weather.name},{weather.country}</h3>
       <img className='my-2' src={weather.iconUrl} alt="" />
       <h5>{weather.description}</h5>
       <h1 className='mt-2'>{weather.temp.toFixed()}&deg;C</h1>
        <div className='d-flex justify-content-around w-75 m-auto'>
          <small>Min Temp : {weather.temp_min.toFixed()}&deg;C</small>
          <small>Max Temp : {weather.temp_max.toFixed()}&deg;C</small>
        </div>
        <div className="mt-5 d-flex justify-content-around">
            <div><MdOutlineWaterDrop/><span className='ms-1'>Humidity</span>
            <h5>{weather.humidity}%</h5>
            </div>
            <div><FaWind/><span className='ms-1'>Wind Speed</span>
            <h5>{weather.speed} Km/hr</h5>
            </div>
        </div>
    </div>
  )
}
