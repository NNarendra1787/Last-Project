import React from 'react'
import Coursole from '../Courso/Coursole'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import "../responsive.css"

function Home() {
  return (
    <div>Home
      <Navbar2 />
      {/* <Navbar /> */}
      <Coursole />

    </div>
  )
}

export default Home