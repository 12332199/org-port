import React from 'react'
import './header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
<nav className="fix">
<Navbar expand="lg" className="bg-white">

      
        <Navbar.Brand href="#home" className='links'><NavLink to='/' className='h3'>ORGPORTFOLIO</NavLink></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" className='toggle'>
          <Nav className="ms-auto " >
            <Nav.Link href="#home" ><NavLink className='navtxt px-1' to="/about">ABOUT</NavLink></Nav.Link>
            <Nav.Link href="#link" ><NavLink className='navtxt px-1'  to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
            <NavDropdown  title="SERVICES" className='tex px-1' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <NavLink to='/app-development' target='_blank' className="text-dark">App Design</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <NavLink to='/ai-development'  target='_blank' className="text-dark"> Ai & Machine Learning</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><NavLink to='/web-development'  target='_blank' className="text-dark">Web Design</NavLink></NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link ><NavLink className='navtxt px-1' to='/carrier' >CARRIER</NavLink></Nav.Link>

            
          </Nav>
          <div className="px-3">
            
          <NavLink to='/contact-us' className='headerButton'>
        Contact us
       </NavLink>
          </div>
        </Navbar.Collapse>
        
  
      
    </Navbar>

    </nav>
    </>
  )
}

export default Header