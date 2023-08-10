import React from 'react'
import { Link } from 'react-router-dom'
import './DropDown.css'

function DropAcc() {
  return (
    <div>
        <div className='DropAss'>
        <ul>
          <li><Link to='/charg' >Charger</Link></li>
          <li><Link to='/shoes' >Shoes</Link></li>
          <li><Link to='/mobile' >Mobiles</Link></li>
          <li><Link to='/laptop' >Laptops</Link></li>
          <li><Link to='/mouse' >Mouse</Link></li>
          <li><Link to='/keybord' >Keybord</Link></li>
          <li><Link to='/headfoen' >Head-Phones</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default DropAcc