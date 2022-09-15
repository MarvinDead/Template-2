import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";


const ServiceDetailBlock = ({title,bgimage,subTitle,smText}) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <>
      <section className="tp-about-area position-relative pt-120 pb-90 fix">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-md-center">
            <div className="col-xl-5 col-12">
              <div
                className="tp-about-img z-index wow fadeInUp d-flex align-self-lg-center align-middle"
                data-wow-delay=".3s"
              >
                <img
                  src={bgimage}
                  alt="img not found"
                  className="img-block-responsive"
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-10 align-self-center">
              <div
                className="tp-about-text z-index wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="section-title-wrapper mb-30">
                  <h2 className="tp-section-title">
                    {title}
                  </h2>
                </div>
                <p className="mb-40">{smText}</p>
                <div className="tp-service-three-text-btn">
                  <Link
                    to="/contact"
                    className="yellow-btn service__btn text-white"
                  >
                    <i className="flaticon-enter text-white"></i> Free Estimate{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailBlock;
