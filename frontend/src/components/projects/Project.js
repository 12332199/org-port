import React, { useState,useEffect } from 'react'
import './project.css'
import axios from 'axios'
const Project = () => {
  const [project,setProject] = useState([])

  const getproject = async()=>{
       const res = await axios.get('http://localhost:5000/api/projects/getproject')
       setProject(res.data)
  }


  useEffect(() => {
   getproject()
  }, [])
  
  return (
    <>
  <div className="mainLand m-2">
    <div className="container">
   <div className="hedingbox">
   <h2 className='text-center'>Technology Landscape <span>We work On</span></h2>
   </div>
        <div className="row">
       
       {
        project.map(({photo,title,desc,_id})=>{
          return(
            <div className="  col-sm-4  Pborder" key={_id}>
              <div className="wid" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
       <figure>
            <img src={`http://localhost:5000/uploads/${photo}`} style={{width:"20%",margin:"10px"}} className='img-fluid mt-2' alt="" />
        </figure>
        <h3>{title}</h3>
         <p >{desc}</p>
         </div>       
</div>
          )
        })
       }
      
       
        </div>
 
    </div>
  </div>
    </>
  )
}

export default Project