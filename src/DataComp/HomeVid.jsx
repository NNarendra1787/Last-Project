import ReactPlayer from 'react-player'
import React, { useRef } from 'react'
import "./Home.css";

const VideoData = "https://youtu.be/tRPqGf8nc4g";
function HomeVid() {
    const playerRef = useRef(null)
  return (
    <div className='HVid'>HomeVid
        <ReactPlayer ref={playerRef} url={VideoData} controls={true} autoplay="autoplay" className="HVid" />
    </div>
  )
}

export default HomeVid