import React from 'react'
import Coursole from '../Courso/Coursole'
// import Navbar2 from '../Navbar2'
// import Navbar from '../Navbar'
// import Navbar2 from '../Navbar2'
import "../responsive.css"
import HomData from '../DataComp/HomData'
import HomeVid from '../DataComp/HomeVid'

function Home() {
  return (
    <div className='MainHome'>Home
      {/* <Navbar2 /> */}
      {/* <Navbar /> */}
      <Coursole />
      <HomData />
      <HomeVid />
    </div>
  )
}

export default Home