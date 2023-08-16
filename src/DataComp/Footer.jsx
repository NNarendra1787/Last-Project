import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer>
            <div className='footLogos'>

            </div>
            <div className='footSites'>
                <h3>Our sites</h3>
                <Link to="/">Home</Link> 
                <Link to="/iPhone">Phone</Link> 
                <Link to="/iPad">IPads</Link> 
                <Link to="/Macbook">Laptops</Link> 
                <Link to="/Access">More</Link> 
            </div>
            <div className='FootCop'>
                <h4>&copy;</h4>
            </div>
        </footer>
    </div>
  )
}

export default Footer