import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <div>
      <Navbar/>
      {/* This div applies the 18vh margin defined in your CSS */}
      <div className="con2">
        <Outlet/>
      </div>
    </div>
  )
}

export default Template