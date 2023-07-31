import React, { useState,useEffect } from 'react'
import './services.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Services = () => {

    const [services,setServices] = useState([])

    const getServices = async() =>{
   const res = await axios.get('http://localhost:5000/api/services/getservice')
   setServices(res.data)
   
    }
    useEffect(() => {
      getServices()
     
    }, [])
    
  return (
    <>
    <section>
        <div className="container"> 
           <div className="titlebox text-center">
           <h2 >Services<span> We Offer</span></h2>
            </div> 
       
            <div className="row ">
                
               {
                services.map(({photo,heading,desc,_id})=>{
                    return(
                        <>
                        
                       
            <div className=" col-sm-6 "  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" >
             <div className="designBox" key={_id}>
                         <figure className="red">
                    <img src={`http://localhost:5000/uploads/${photo}`} alt="hello" />
                </figure> 
                
                <h3>{heading}</h3>
                <p className='hit'>{desc} </p>
                                <NavLink className="button" target='_blank' to={`/singlepage/${_id}` }>Know more</NavLink>
                                </div>
        </div>
       
                        </>
                    )
                })
               }
                </div>
     
             </div>
            
           
        
    </section>
    </>
  )
}

export default Services