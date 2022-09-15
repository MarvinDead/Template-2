import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../../../components/Sidebar/Sidebar';

const HomeTwoNavbar = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [sticky, setSticky] = useState(false);
   const stickyNavbar = () => {
      if (window.scrollY > 80) {
         setSticky(true)
      }
      else {
         setSticky(false)
      }
   }

   const { rpdata } = useContext(GlobalDataContext);

      

   window.addEventListener('scroll', stickyNavbar);
   return (
      <>
         <header>
            <div className={sticky ? "sticky-menu tp-header-area-two header-sticky" : "tp-header-area-two header-sticky"}>
               {/* <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-8">
                        <div className="tp-header-logo-two">
                           <div className="bg-white rounded-3" data-background="assets/img/logo/logo-white-bg.png">
                              <Link to="/"><img src={rpdata?.dbPrincipal?.logo} className="p-3" alt="img not found" />
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-4">
                        <div className="tp-header-menu-two-wrapper">
                           <div className="row">
                              <div className="col-12">
                                 <div className="tp-header-top-two">
                                    <div className="tp-header-top-two-info">
                                       <ul>
                                          <li><i className="fa fa-location-circle"></i> {rpdata.dbPrincipal?.location[0].address}</li>
                                          <li><i className="fa fa-calendar-alt"></i> {rpdata.dbPrincipal?.workdays[0].day}</li>
                                          <li><i className="fa fa-phone-alt"></i>
                                          {rpdata.dbPrincipal?.phones.slice(0,1).map((item,index) => {
                                             return(
                                                <a href={`tel:+1${item.phone}`} key={index}>{item.phone}</a>
                                             )
                                          }
                                          )}
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="tp-header-top-two-social">
                                    {
                                    rpdata.dbSocialMedia?.redes.map((item, index) => {
                                       return(
                                          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                             <i className={`fab fa-${item.icon}`}></i>
                                          </a>
                                       )
                                    }
                                    )
                                 }
                                    </div>
                                 </div>
                                 <div className="tp-header-menu-two">
                                    <div className="tp-main-menu tp-main-menu-two">
                                       <nav id="tp-mobile-menu">
                                          <ul>
                                             <li> <NavLink to="/">Home</NavLink></li>
                                             <li> <NavLink to="/about">About</NavLink></li>
                                             <li> 
                                                <NavLink to="/services">Services</NavLink>
                                                <ul className="sub-menu">
                                                   {
                                                   rpdata?.dbServices?.map((item, index) => {
                                                      return(
                                                         <li key={index}>
                                                            <NavLink to={`/services/${item.name.replace(" " , "-").toLowerCase()}`}>{item.name}</NavLink>
                                                         </li>
                                                      )
                                                   }
                                                   )
                                                   }
                                                </ul>
                                             </li>
                                             <li>
                                                <NavLink to="/projects">Gallery</NavLink>
                                                <ul className="sub-menu">
                                                   {
                                                   rpdata?.landings?.map((item, index) => {
                                                      return(
                                                         <li key={index}>
                                                            <NavLink to={`/projects/${item.name.replace(" " , "-").toLowerCase()}`}>{item.name}</NavLink>
                                                         </li>
                                                      )
                                                   }
                                                   )
                                                   }
                                                </ul>
                                             </li>
                                             <li> <NavLink to="/contact">Contact</NavLink></li>
                                          </ul>
                                       </nav>
                                    </div>
                                    <div className="tp-main-menu-two-btn">
                                       <Link to="/contact" className="yellow-btn">Free Estimate +</Link>
                                    </div>
                                    <div className="side-menu-icon d-xl-none text-end">
                                       <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                                          <i> <FaBars className='bar_icon' /> </i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose}></Sidebar>
      </>
   );
};

export default HomeTwoNavbar;