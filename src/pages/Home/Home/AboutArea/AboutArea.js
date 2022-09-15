import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import { Link } from "react-router-dom";
import Data from "../../../../api/data.json";

const imgUrl = require.context('../../../../img/', true);

const AboutArea = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <section className="tp-about-area position-relative pt-120 pb-90 fix">
        <div className="tp-about-shape">
          <img
            src="assets/img/about/about-shape-1.jpg"
            className="img-fluid"
            alt="img not found"
          />
        </div>
        <div className="container">
          <div className="row justify-content-xl-between justify-content-md-center">
            <div className="col-xl-5 col-12">
              <div
                className="tp-about-img z-index wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src={rpdata.stock?.[3]} alt="img not found" />
              </div>
            </div>
            <div className="col-xl-6 col-md-10">
              <div
                className="tp-about-text z-index wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="section-title-wrapper mb-30">
                  <h5 className="tp-section-subtitle section__sm__title mb-20">{rpdata.dbSlogan?.[4].slogan}</h5>
                  <h2 className="tp-section-title">{rpdata.dbSlogan?.[6].slogan}</h2>
                </div>
                <p className="mb-40">{rpdata.dbAbout?.[0].text}</p>
                <div className="row mb-10">
                  <div className="col-sm-6">
                    <div className="tp-choose-timeline ml-15 mb-30">
                      {rpdata.dbAbout?.[0].list?.map((item, index) => {
                        return (
                            <div
                            className="tp-choose-timeline-single mb-20 pl-35 wow fadeInUp"
                            data-wow-delay=".4s"
                            key={index}
                          >
                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                              <Link to="/">
                                {item}
                              </Link>
                            </h4>
                          </div>
                        );
                      })}
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

export default AboutArea;
