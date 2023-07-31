import React, { useEffect, useState } from 'react'
import './singlepage.css'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePage = () => {

    const [single,setSingle] = useState({})
    const {id} = useParams()

    const getSingle = async()=>{
       try {
        const res = await axios.get(`http://localhost:5000/api/services/getservice/${id}`)
        setSingle(res.data)
        
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
      getSingle()
    })
  return (
    <>
<div className="singleP">
    <div className="container">
        <div className="row">
            <div className="col-sm-8">
                <div className="Left">
                    <h1 className='text-center'>{single.heading}</h1>
                    <p>{single.desc}</p>
                    <div className='d-flex justify-content-center'><NavLink to='/contact-us' className='button'>Contact us</NavLink></div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="Right">
                    <img src="/images/backg.avif" alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default SinglePage