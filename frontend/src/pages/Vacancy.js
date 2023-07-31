import React from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const Vacancy = () => {
  return (
    <>
    <div className="jobs">
        <div className="container-fluid">
            <h1>Apply Jobs</h1>

            <div className="row">
                <div className="col-sm-4">
                    <div className='up ' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="500">
                        <p className='location'>GURUGAON,HARAYANA,INDIA</p>
                       <h4> Senior - Full Stack Developer(MERN STACK) </h4>
                                    <p className='des'>Evalueserve is seeking a(n) Analyst - Equity Research(Japan Semi conductor) within the Investment Research department.</p>
                        <div className="buttons ">
                        <p>EXP:Entry Level</p>
                        <NavLink to='/contact-us' target='_blank'  onClick={()=>toast.success("Please Fil the Contactus form")}> <button>Apply Now</button></NavLink>                        </div>
                    </div>
                   
                </div>
                <div className="col-sm-4">
                    <div className='up' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
                        <p className='location'>GURUGAON,HARAYANA,INDIA</p>
                       <h4>Junior - Full Stack Developer(MEAN STACK) </h4>
                                    <p className='des'>Evalueserve is k a(n) Analyst - Equity Research(Japan Semi conductor) within the Investment Research department.</p>
                        <div className="buttons ">
                        <p>EXP:Entry Level</p>
                        <NavLink to='/contact-us' onClick={()=>toast.success("Please Fil the Contactus form")}> <button>Apply Now</button></NavLink>                        </div>
                    </div>
                   
                </div>
                <div className="col-sm-4">
                    <div className='up' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="2000">
                        <p className='location'>GURUGAON,HARAYANA,INDIA</p>
                       <h4> Analyst - Equity Research(Japan Semi conductor) </h4>
                                    <p className='des'>Evalueserve is seeking a(n) Analyst - Equity Research(Japan Semi conductor) within the Investment Research department.</p>
                        <div className="buttons ">
                        <p>EXP:Entry Level</p>
                       <NavLink to='/contact-us'  onClick={()=>toast.success("Please Fil the Contactus form")}> <button>Apply Now</button></NavLink>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Vacancy