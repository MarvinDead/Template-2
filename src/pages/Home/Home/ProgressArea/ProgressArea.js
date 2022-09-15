import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";

const ProgressArea = () => {
   const { rpdata } = useContext(GlobalDataContext);
   return (
      <>
         <section className="tp-progress-area pt-90">
            <div className="tp-progress-area-inner position-relative pt-25">
               <div className="tp-progress-shape">
                  <img src={rpdata.stock?.[6]} alt="img not found"/>
               </div>
               <div className="container z-index">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="tp-progress-img pt-75 mb-30">
                           <img src={rpdata.stock?.[5]} alt="img not found"/>
                        </div>
                     </div>
                     <div className="col-lg-6 pt-100 align-self-center">
                        <div className="tp-progress-text mb-30">
                           <div className="section-title-wrapper">
                              <h5 className="tp-section-subtitle section__sm__title mb-25">{rpdata.dbSlogan?.[5].slogan}</h5>
                              <h2 className="tp-section-title mb-25">{rpdata.dbSlogan?.[4].slogan}</h2>
                           </div>
                           <p className="mb-40">{rpdata.dbHome?.[1].text} </p>
                           <div className="tp-skill--content">
                              <div className="tp-skill__wrapper mb-45">
                                 <div className="tp-skill--title__wrapper">
                                    <h5 className="tp-skill--title">Excellent Services</h5>

                                    <span style={{left:'93%'}}>100%</span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s" role="progressbar"

                                    style={{width:'99%',visibility:'visible',animationDuration:'1s',
                                    animationDelay:'0.5s',animationName:'slideInLeft'}}
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span></span></div>
                                 </div>
                              </div>
                              <div className="tp-skill__wrapper mb-45">
                                 <div className="tp-skill--title__wrapper">
                                    <h5 className="tp-skill--title">Professional Team!</h5>

                                    <span style={{left:'93%'}}>100%</span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s" role="progressbar"

                                    style={{width:'99%',visibility:'visible',animationDuration:'1s',
                                    animationDelay:'0.5s',animationName:'slideInLeft'}}
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span></span></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ProgressArea;