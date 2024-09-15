import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

function error() {
  return (
    <div className='errorBox'>
        <h1 className='error'>404 PAGE NOT FOUND</h1>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default error