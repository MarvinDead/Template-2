import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import { Link } from "react-router-dom";
import {MdRoofing} from 'react-icons/md';
import Data from "../../../../api/data";

const ServiceHome = (props) => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <section className="tp-service-area-three pt-60 pb-90 mb-150">
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-wrapper text-center mb-55 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                {rpdata.dbSlogan?.[2].slogan}
                </h5>
                <h2 className="tp-section-title heading-color-black">
                  Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
              {rpdata.dbServices?.slice(0,3).map((item, index) => {
                return (
                    <div className="col-xl-4 col-sm-6">
                  <div
                    className="tp-services white-bg mb-30 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-services-icon yellow-circle-shape">
                    <i className="">
                      <MdRoofing color="white" />
                    </i>
                    </div>
                    <div className="tp-services-text fix">
                      <h4 className="tp-services-text-title mb-15 hover-theme-color">
                        <Link to="/services">{item.name}</Link>
                      </h4>
                      <p className="mb-20">{item.description[0].text.substring(0,100) + ("...")}</p>
                      <div className="tp-services-text-link">
                        <Link to="/services">
                          <i className="flaticon-enter"></i> More Services
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                );
              })}
            </div>
          
        </div>
      </section>
    </>
  );
};

export default ServiceHome;
