import React, { useState } from 'react'
import ContactDropdown from './ContactDropdown'
import axios from 'axios'
import { toast } from 'react-toastify';

const Contactus = () => {
    const initialState = {
        fname: "",
        lname: "",
        country: "",
        areaofintrest: "",
        companyname: "",
        email: "",
        phone: "",
        message: ""

    }
    const [contact, setContact] = useState(initialState);
     const[errors,setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
         
       
       
        try {
            const errors = validate();
            setErrors(errors)

         if(Object.keys(errors).length  === 0){
            alert("done")
         }
      const {email,phone,companyname,fname,country} = contact
         if(!email|| !phone || !companyname|| !fname ||!country){
            toast.error("Please Filled form")
         }else{
            await axios.post('http://localhost:5000/api/contact/add-contact', contact)
            toast.success("Form Submitted Successfully")  
            setContact("");
         }
          
        

        } catch (error) {
            console.log(error)
        }

    }


    const validate = ()=>{
        const error = {}
          if(!contact.email){
           error.email = "Email is required"
          }else{
            error.email = ""
          }
          if(!contact.fname){
            error.fname = "First Name is required"
           }else{
             error.fname = ""
           }
           if(!contact.lname){
            error.lname = "Last Name is required"
           }else{
             error.lname = ""
           }
           if(!contact.country){
            error.country = "Country is required"
           }else{
             error.country = ""
           }
           if(!contact.country){
            error.country = "Country is required"
           }else{
             error.country = ""
           }
           
           if(!contact.areaofintrest){
            error.areaofintrest = "This field  is required"
           }else{
             error.areaofintrest = ""
           }
           if(!contact.companyname){
            error.companyname = "This field  is required"
           }else{
             error.companyname = ""
           }
           if(!contact.phone){
            error.phone = " Phone Number is required"
           }else if(!contact.phone===10){
             error.phone = "Invalid phone number"
           }else{
            error.phone = ""
           }
           if(!contact.message){
            error.message = " message is required"
           }else{
             error.message = ""
           }
          return error;
    }

  

    const hamdleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })

       
    }
    return (
        <>
            <section>
                <div className="contactArea">
                    <div className="contactHead">


                        <div className="container">
                            <div className="contactBody">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contactLeft">
                                            <div className='d-flex'>
                                                <span style={{ "fontSize": "50px", "color": '#E0044E' }}>.</span><p>Our global team is available to you 24h/7d</p>
                                            </div>
                                            <h1>Contact our Experts.</h1>
                                            <p>Our global team of 4,000+ experts is dedicated to helping our clients and partners meet their goals. We’ve successfully applied our domain-specific AI to the management and transformation of business processes across all functions. With over 500 satisfied clients, we’re confident we can address your needs too.</p>
                                        </div>
                                        <h6 className='m-4'> Who we work with:</h6>
                                        <ul>
                                            <li>Global Fortune 500 companies</li>
                                            <li>8 of the top 10 global investment banks</li>
                                            <li>4 of the top 5 strategy consultants</li>
                                            <li>12 of the 15 largest global pharma companies</li>
                                            <li>3 of the 6 oil and gas supermajors</li>
                                        </ul>
                                        <p> We also serve many large-and medium-sized companies in sectors such as energy, chemicals, ICT, logistics and consumer goods. </p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contactRight">
                                            <form action="" onSubmit={handleSubmit}>
                                                <div className=" row">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="">First Name<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                                        <input type="text" name='fname' value={contact.fname || ""} onChange={hamdleChange} className='form-control' />
                                                        {errors.fname && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.fname}</div>}
                                                        <label htmlFor="">Country<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                                        <input type="text" name='country' value={contact.country || ""} onChange={hamdleChange} className='form-control'  />
                                                        {errors.country && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.country}</div>}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="">Last Name<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                                        <input type="text" name='lname' value={contact.lname || ""} onChange={hamdleChange} className='form-control'  />
                                                        {errors.lname && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.lname}</div>}
                                                        <label htmlFor="">Company Name<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                                        <input type="text" name='companyname' value={contact.companyname || ""} onChange={hamdleChange} className='form-control'  />
                                                        {errors.companyname && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.companyname}</div>}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="">Company Email Address<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                                        <input type="email" name='email' value={contact.email || ""} onChange={hamdleChange} className='form-control'  />
                                                        {errors.email && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.email}</div>}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label htmlFor="">Phone No<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                                        <input type="number" name='phone' value={contact.phone || ""} onChange={hamdleChange} className='form-control'  />
                                                        {errors.phone && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.phone}</div>}

                                                    </div>


                                                    <div className="col-12">
                                                        <label htmlFor="">Area of Interests<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                                        <input type="text" name='areaofintrest' value={contact.areaofintrest || ""} onChange={hamdleChange} className='form-control'  />
                                                        {errors.areaofintrest && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.areaofintrest}</div>}

                                                    </div>
                                                    <div className="col-12">
                                                        <div>
                                                            <label htmlFor="exampleFormControlTextarea1">How we can help you?<span style={{ color: "#E0044E", fontWeight: "700" }}>*</span></label>
                                
                                                            <textarea className="form-control" name='message' value={contact.message || ""} onChange={hamdleChange} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                                            {errors.message && <div style={{fontSize:"16px",color:"red",fontWeight:"600",marginLeft:"10px"}}>{errors.message}</div>}

                                                        </div>


                                                    </div>



                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button className="contantBtn ">Contact us</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <ContactDropdown />
                </div>

            </section>
        </>
    )
}

export default Contactus