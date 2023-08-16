import React from 'react'
import { Link } from 'react-router-dom'
import './DropDown.css'

function DropPh() {
  return (
    <>
        <div className='DropPh'>
        <ul>
          <li><Link to='/Vivo' className='ph'>Vivo</Link></li>
          <li><Link to='/Redmi' className='ph'>Redmi</Link></li>
          <li><Link to='/Oneplus' className='ph'>OnePlus</Link></li>
        </ul>
      </div>
    </>
  )
}

export default DropPh