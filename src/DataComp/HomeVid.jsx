import React from 'react'
import "./Home.css";
import "../responsive.css"
import ad from "../Img/ad.jpg"


function HomeVid() {
  return (
    <div className='HVid'>
      <img src={ad} alt="/" className='Advertisement'/>
    </div>
  )
}

export default HomeVid