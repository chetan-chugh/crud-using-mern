import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex gap-8 justify-around text-white text-3xl bg-black py-2 rounded-md'>
        <Link to="/">Home Page</Link>
        <Link to="/login"> Login</Link>
        <Link to="/data">Data</Link>
      </div>
    </>
  )
}

export default Navbar