import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import Store from './Router/Store'
import IPhone from './Router/IPhone'
import IPad from './Router/IPad'
import Macbook from './Router/Macbook'
import Accesseries from './Router/Accesseries'
import LoginData from './Router/LoginData'
import Register from './Router/Register'

function PageRoutes() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/iPhone" element={<IPhone />} />
        <Route path="/iPad" element={<IPad />} />
        <Route path="/Macbook" element={<Macbook />} />
        <Route path="/Access" element={<Accesseries />} />

        <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginData/>} />
        
    </Routes>
        
    </div>
  )
}

export default PageRoutes