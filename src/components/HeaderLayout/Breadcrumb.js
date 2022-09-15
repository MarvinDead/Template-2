import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({title,subTitle,smText = 'About'}) => {
   return (
      <>
         <div className="tp-page-title-area pt-200 pb-185 position-relative fix breadcrumb_bg d-flex text-center color-white">
            <div className="tp-custom-container">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-page-title z-index">
                        <h2 className="breadcrumb-title mt-50">{title}</h2>
                        <div className="breadcrumb-menu">
                           <nav className="breadcrumb-trail breadcrumbs">
                              <ul className="trail-items">
                                 <li className="trail-item trail-begin"><Link to="/">Home</Link>
                                 </li>
                                 <li className="trail-item trail-end"><span>{smText && smText}</span></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Breadcrumb;