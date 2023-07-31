import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

const ContactDropdown = () => {
  return (
    <>
    <div className="container-fluid ">
      <div className="heading">
      <div className='d-flex'>
       <span style={{ "fontSize": "50px", "color": '#E0044E' }}>.</span><p style={{"fontSize": "18px",
    "margin": "39px 0 0px 8px"}}>Our global team is available to you 24h/7d</p>
       </div>
       <h1 style={{fontWeight:"800"}}>Office Locations.</h1>
      </div>

      <div className="container">
        <h1>United State</h1>
        <div className="row">
          <div className="col-sm-6">
            <h4>McLean</h4>
            <p>
             Xyzcompany Inc.
             1660 International Drive, Suite 600,
             McLean, VA 22102
             United States</p>
          </div>
          <div className="col-sm-6">
            <h4>Releigh</h4>
            <p>
            Xyzcompany, Inc.
One Glenwood Avenue, 5th Floor
Raleigh, NC 27603
United States</p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>India</h1>
        <div className="row">
          <div className="col-sm-4">
            <h4>Gurugram</h4>
            <p>
            Xyzcompany.com Pvt. Ltd.
Tower A, 2nd Floor UnitechWorld – Cyber Park Jharsa Sector-39, Gurugram – 122002,
Haryana,
India</p>
          </div>
          <div className="col-sm-4">
            <h4>Bengaluru</h4>
            <p>
            Xyzcompany.com Pvt.Ltd
2nd Floor, SJR 1 Park, Road Number 9 EPIP Zone, Whitefield Bengaluru – 560066,
Karnataka,
India</p>
          </div>
          <div className="col-sm-4">
            <h4>Mumbai</h4>
            <p>
             Xyzcompany.com Pvt.Ltd
1st Floor, Block B7 – North Wing, Nirlon Knowledge Park, Off Western Express Highway,
Mumbai, Goregaon (East) – 400063,</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactDropdown