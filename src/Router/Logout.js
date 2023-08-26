import React from 'react'
import { useDispatch } from 'react-redux';

const Logout = () => {

    const dispatch = useDispatch();
    localStorage.clear();
    dispatch()
  return (
    <div>
      
    </div>
  )
}

export default Logout
