import React from 'react'
import './Mainplaces.css'
import { famousrestraunt } from '../../Data/Data'

function MainPlaces() {
  return (
    <div className="bestplaces">
    <div className="heading">
        <h2>best place to eat across cities</h2>
    </div>
    <div className="detail">
      {famousrestraunt.map((city)=>(
        <div><button className="sorted">{city.cityname}</button></div>

      ))}
       
    </div>
</div>
  )
}

export default MainPlaces