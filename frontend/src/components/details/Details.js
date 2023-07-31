import React from 'react'

const Details = () => {
  return (
    <>
    
    <div className="container">
    <div className="row ">
        <h2 className='text-center ' style={{fontSize:"50px",fontWeight:"600"}}>Our <span style={{color:"#E0044E"}}> Advantage.</span> </h2>
          <div class="col-6 col-sm-5 col-md-3 col-lg-3">
                        <div class="HappyBox">
                            <h6>95%+</h6>
                            <p>Customer Retention</p>
                        </div>
          </div>
          <div class="col-6 col-sm-5 col-md-3 col-lg-3">
                        <div class="HappyBox">
                            <h6>400+</h6>
                            <p>Man Years Experience</p>
                        </div>
           </div>
           <div class="col-6 col-sm-5 col-md-3 col-lg-3">
                        <div class="HappyBox">
                            <h6>500+</h6>
                            <p>Happy Customers</p>
                        </div>
           </div>
           <div class="col-6 col-sm-5 col-md-3 col-lg-3">
                        <div class="HappyBox">
                            <h6>8+</h6>
                            <p>Years in Business</p>
                        </div>
          </div>
          </div>
    </div>
    </>
  )
}

export default Details