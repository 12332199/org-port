import React from 'react'
import ContactDropdown from './ContactDropdown'
import Details from '../components/details/Details'

const About = () => {
  return (
    <>
     <div className="bannerAraa">
       
        <div className="container">
          <div className="main ">
            <div className="text"></div>
          <h1 className='text-center text-white'>About <span style={{color:"#E0044E"}}>us</span></h1>
          <p className='text-center mt-5'>
          XYZCOMPANY is a fast-growing company in designing & developing mobile applications and websites. With just 8+ years of existence, we have earned ISO 9001:2015, ISO 27001:2015, and various startup appreciations by delivering exceptional business solutions across the globe. We Redefine your Business or Startup Goals with Advanced Website & Mobile App Development Solutions Powered by Robust Architecture and AI-based Algorithms.
          </p>
          <Details/>
        </div>
        </div>
     </div>
     <ContactDropdown/>
    </>
  )
}

export default About