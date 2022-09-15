import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from 'react-router-dom';
import Clean from "../../img/icons/CLEAN.svg"
import IconLogo from "../../img/logo/logo.png"
const imgUrl = require.context('../../img/', true);

const ServicePageArea = ({service_image_num,ser_icon_img,ser_title,colorClass, ser_description,ser_itemservices, event_click}) => {
   const {rpdata } = useContext(GlobalDataContext);
   
   return (
      <>
         <div className="col-lg-6">
            <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay="1.2s">
               <div className="tp-service-three-img">
                  <img src={service_image_num} className="img-fluid img-service-card" alt="img-not-found"/>
                     <div className="tp-service-three-img-icon bg-white">
                        <img src={rpdata.dbPrincipal.logo} className="img-fluid mb-5" alt="img-not-found"/>
                     </div>
                     <div className="tp-service-three-img-overlay">
                        <div className="tp-service-three-img-overlay-icon bg-white">
                        <img src={rpdata.dbPrincipal.logo} className="img-fluid mb-4 p-2" alt="img-not-found"/>
                        </div>
                     </div>
               </div>
               <div className="tp-service-three-text fix">
                  <h4 className={ colorClass ? "home_three_title tp-service-three-title mb-20 heading-color-black-with-hover" : "tp-service-three-title mb-20 heading-color-black-with-hover"}>
                   <Link to="/services" onClick={event_click}>{ser_title}</Link></h4>
                  <p className="mb-30">{ser_description.substring(0, 100) + "..."}</p>
                  <ul>{ser_itemservices}</ul>
                  <div className="tp-service-three-text-btn">
                     <button className="yellow-btn service__btn" onClick={event_click}>
                        <i className="flaticon-enter"></i> More Info</button>
                        
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicePageArea;