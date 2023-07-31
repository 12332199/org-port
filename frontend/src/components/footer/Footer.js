import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="footerLeft">
                            <h1>XYZCOMPANY</h1>
                            <aside>
                                <h6>USA</h6>
                                <p>2035 Sunset Lake Road, Suite B-2, Newark, New Castle, Delaware 19702, USA. Phone : +13025746634 </p>
                            </aside>
                            <aside>
                                <h6>INDIA</h6>
                                <p>2nd Floor, H-146/147, Sector 63, Noida, UP-India PIN:- 201301. Phone : +91-9650100411 , 8178057416, 0120 409 6514</p>
                            </aside>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="footerRight">
                            <div className="foots">
                            <h1>Services</h1>
                            <ul>
                                   <NavLink to='/Website-Development'  target='_blank'> <li>Website Development</li></NavLink>
                                   <NavLink to='/Mobile-App-Development'  target='_blank'> <li>Mobile App Development</li></NavLink>
                                   <NavLink to='/IOS-App-Development'  target='_blank'> <li>IOS App Development</li></NavLink>
                                   <NavLink to='/Android-App-Development'  target='_blank'> <li>Android App Development</li></NavLink>
                                   <NavLink to='/Ai-deveopment'  target='_blank'> <li>AI |ML Development</li></NavLink>
                                   
                                </ul>
                            </div>
                            <div className="foots">
                            <h1>Industries</h1>
                            <ul>
                                   
                                    <NavLink to='/E-Commerce'  target='_blank'><li>E-Commerce</li></NavLink>
                                    <NavLink to='/Map-And-Navgation'  target='_blank'><li>Map And Navgation</li></NavLink>
                                    <NavLink to='/Social-networking'  target='_blank'><li>Social networking</li></NavLink>
                                    <NavLink to='/Healthcare'  target='_blank'> <li>Healthcare</li></NavLink>
                                    <NavLink to='/On-Demand-Services'  target='_blank'>  <li>On Demand Services</li></NavLink>
                                    
                                    
                                   
                                  
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="bootonFooter">
        <div className="container">
                <div className="row">
                    <div className="col-sm-4 p-3">
                       
                        <NavLink to='/xyzcompany'  target='_blank'> <p className='p-1'> &copy;2023 Xyzcompany. All rights reserved.</p></NavLink>

                    </div>
                    <div className="col-sm-4 d-flex p-3 ">
                    <NavLink to='/Privacy-Policy'  target='_blank'><p className='p-1'> Privacy Policy</p></NavLink>
                    <NavLink to='/ Cookies-Policy'  target='_blank'> <p className='p-1'> Cookies Policy</p></NavLink>
                    <NavLink to='/Term&Condition'  target='_blank'>   <p className='p-1'> Term & Condition</p> </NavLink>
                        
                       
                        

                    </div>
                    <div className="col-sm-4 d-flex p-3">
                    <NavLink to='/facebook' target='_blank'>   <p className='p-1'> Facebook</p> </NavLink>
                    <NavLink to='/linkedin'  target='_blank'>  <p className='p-1'>Linkedin</p> </NavLink>
                    <NavLink to='/twitter'  target='_blank'>   <p className='p-1'>Twitter</p> </NavLink>
                        
                        
                     

                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer