import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import { FaBars } from 'react-icons/fa';
import Data from '../../../api/data.json';

const Navigation = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   // sticky state
   const [sticky,setSticky] = useState(false);
   const stickyNavbar = () => {
      if(window.scrollY > 80){
         setSticky(true)
      }
      else{
         setSticky(false)
      }
   }
   window.addEventListener('scroll',stickyNavbar);
   return (
      <>
         <header>
            <div className="tp-header-area">
               <div className="tp-header-top theme-dark-bg pt-20 pb-50 d-none d-xl-block">
                  <div className="tp-custom-container">
                     <div className="row align-items-center">
                        <div className="col-xxl-4 col-xl-5">
                           <div className="tp-header-top-info">
                              <div className="tp-header-top-info-single pr-40 mr-40 border-right-1">
                                 <div className="tp-header-top-info-single-icon mr-10">
                                    <i className="flaticon-pin"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">Location</span>
                                    <span className="tp-header-top-info-single-content font-medium">{Data.dbPrincipal.address.locations}</span>
                                 </div>
                              </div>
                              <div className="tp-header-top-info-single">
                                 <div className="tp-header-top-info-single-icon mr-15">
                                    <i className="flaticon-email"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">Email us</span>
                                    
                                       {
                                          Data.dbPrincipal.emails.map((item,index) => {
                                             return <a href={`mailto:${item.email}`} className="tp-header-top-info-single-content font-medium text-white">
                                             <span key={index}>{item.email}</span></a>
                                          }
                                          )
                                    }
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-2">
                           <div className="header-logo text-center">
                              <Link to="/"><img src={Data.dbPrincipal.logo} className="img-fluid w-25" alt="logo not found" />
                              </Link>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5">
                           <div className="tp-header-top-info justify-content-end">
                              <div className="tp-header-top-info-single mr-85">
                                 <div className="tp-header-top-info-single-icon tp-header-top-info-single-icon-call mr-10">
                                    <i className="flaticon-phone-call"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">Call Us Now</span>
                                    {
                                       Data.dbPrincipal.phones.map((item,index) => {
                                          return <a href={`tel:${item.phone}`} className="tp-header-top-info-single-content font-medium text-white">
                                          <span key={index}>{item.phone}</span></a>
                                       }
                                       )
                                    }
                                 </div>
                              </div>
                              <div className="tp-header-top-info-single">
                                 <div className="tp-header-top-info-single-btn">
                                    <Link to="/contact" className="yellow-btn"><i className="flaticon-enter"></i> Free Estimate </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={sticky ? "sticky-menu tp-header-menu-area tp-transparent-header-menu header-sticky" :"tp-header-menu-area tp-transparent-header-menu header-sticky"}>
                  <div className="container">
                     <div className="row justify-content-xl-center align-items-center">
                        <div className="col-xl-2 col-8 tp-sticky-column">
                           <div className="tp-sticky-logo">
                              <Link to="/"><img src={Data.dbPrincipal.logo} className="img-fluid w-75" alt="logo not found" /></Link>
                           </div>
                        </div>
                        <div className="col-xl-8 col-4">
                           <div className="tp-main-menu-bg">
                              <div className="tp-main-menu">
                                 <nav id="tp-mobile-menu">
                                    <ul className="text-center">
                                       <li>
                                          <NavLink to="/">Home</NavLink>
                                       </li>
                                       <li className="menu-item-has-children">
                                          <NavLink to="/about">About </NavLink>
                                       </li>
                                       <li className="menu-item-has-children">
                                          <NavLink to="/services">Services </NavLink>
                                       </li>
                                       <li className="menu-item-has-children">
                                          <NavLink to="/projects">Gallery</NavLink>
                                       </li>
                                       <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>


                              <div className="side-menu-icon d-xl-none text-end">
                                 <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                                 <i> <FaBars className='bar_icon' /> </i></button>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 tp-sticky-column-btn">
                           <div className="tp-sticky-btn text-end">
                              <Link to="/contact" className="theme-btn justify-content-end text-white"><i className="flaticon-enter"></i> Contact Us</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose}></Sidebar>
      </>
   );
};

export default Navigation;