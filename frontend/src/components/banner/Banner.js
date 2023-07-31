import React from 'react'
import './banner.css'
import { NavLink } from 'react-router-dom'
const Banner = () => {
  return (
    <>
      <div className="banner">
        <video  autoPlay loop muted className='video'>
            <source   src="/images/video.mp4" type="video/mp4" className='back-video' />
        </video>
      <div className="container">
      <div className="content"  data-aos="zoom-in-up">
        <h1>Elevate Your <span>  Impact.</span> </h1>
        <p className='text-light'>In a world of constant change, disruption comes from every angle, and questions from all corners. &nbsp;You need to accelerate&nbsp;and strengthen&nbsp;decision-making on the most pressing questions&nbsp;facing your business.&nbsp;&nbsp;Make&nbsp;decisions now&nbsp;with&nbsp;Evalueserve.</p>
        
       <NavLink to='/carrier'>
       <button className='bannerButton '>
        Get Started
       </button>
       </NavLink>
      </div>
</div>
      </div>
      <div className='bottomBanner'>
        <div className="container">
          
           <div className='d-flex justify-content-between '>
            <div className='d-flex'>
           <img src="./images/Bottbanner.png" alt="" />
           <h3>Join the Team.</h3>
            </div>
           <NavLink to="/carrier"> <p className='txt'>Open Position <span className='text-danger '>→</span></p></NavLink>
            </div>
           </div>
      </div>
      
    </>
  )
}

export default Banner