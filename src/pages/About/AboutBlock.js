import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import Data from "../../api/data.json";
import { Link } from "react-router-dom";

const imgUrl = require.context('../../img/', true);

const AboutBlock = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <section className="tp-progress-area pt-90 pb-100">
        <div className="tp-progress-area-inner position-relative pt-25">
          <div className="tp-progress-shape">
            <img src={rpdata.stock?.[1]} alt="img not found" />
          </div>
          <div className="container z-index">
            <div className="row">
              <div className="col-lg-6">
                <div className="tp-progress-img pt-75 mb-30">
                  <img src={rpdata.stock?.[0]} alt="img not found" />
                </div>
              </div>
              <div className="col-lg-6 align-self-lg-center">
                <div className="tp-progress-text mb-30">
                  <div className="section-title-wrapper">
                    <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-25 text-black">
                    {rpdata.dbSlogan?.[0].slogan}
                    </h5>
                    <h2 className="tp-section-title mb-25">
                    {rpdata.dbSlogan?.[3].slogan}
                    </h2>
                  </div>
                  <p className="mb-40">{rpdata.dbAbout?.[1].text}</p>
                </div>
                <div className="tp-service-three-text-btn">
                <a href={`tel:+1${rpdata.dbPrincipal?.phones[0].phone}`} className="theme-btn text-white">
                        <i className="flaticon-enter"></i> Contact Us
                      </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBlock;
