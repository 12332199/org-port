import React from 'react'
import Vacancy from './Vacancy'

const Carrier = () => {
  return (
    <>
   
    <div className="carrier">
        <div className="container">
         <div className="main">
        <div className='d-flex'>
       <span style={{ "fontSize": "50px", "color": '#E0044E' }}>.</span><p style={{"fontSize": "18px",
    "margin": "39px 0 0px 8px","fontWeight":"800"}}>Carries</p>
       </div>
       <h1>Jobs at <span className='back'>Xyzcompay</span></h1>
       <p>We offer numerous growth opportunities for freshers as well as seasoned professionals. Join us.</p>
        </div>
        </div>
    </div>
      <Vacancy/>
    </>
  )
}

export default Carrier