import React from 'react';
import { Link } from 'react-router-dom';
import Data from "../../api/data.json";

const HomeServiceItem = ({icon_name,title, description}) => {
   return (
      <>
         <div className="col-xl-4 col-sm-6">
            <div className="tp-services white-bg mb-30 wow fadeInUp" data-wow-delay=".2s">
               <div className="tp-services-icon yellow-circle-shape">
                  <i className={`fab fa-${icon_name}`}></i>
               </div>
               <div className="tp-services-text fix">
                  <h4 className="tp-services-text-title mb-15 hover-theme-color">
                     <Link to="/services">{title}</Link></h4>
                  <p className="mb-20 text-truncate">{description}</p>
                  <div className="tp-services-text-link">
                     <Link to="/services"><i className="flaticon-enter"></i> More Services</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeServiceItem;