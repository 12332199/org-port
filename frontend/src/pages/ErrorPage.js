import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
     <div className="error">
        <div className="container">
            <h1>There Is Some Error Load this Page</h1>
            <p>Click the button And go to HomePage</p>
            <div className='errorbtn'>
               <NavLink to='/'> <button>HomePage</button></NavLink>
            </div>
        </div>
     </div>
    </>
  )
}

export default ErrorPage