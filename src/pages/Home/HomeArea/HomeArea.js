import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import { Link } from "react-router-dom";


const HomeArea = () => {

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
                className="tp-about-img z-index wow fadeInUp d-flex align-self-lg-center align-middle"
                data-wow-delay=".3s"
              >
                <img src={rpdata.stock?.[2]} alt="img not found" className="img-block-responsive" />
              </div>
            </div>
            <div className="col-xl-6 col-md-10">
              <div
                className="tp-about-text z-index wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="section-title-wrapper mb-30">
                  <h5 className="tp-section-subtitle section__sm__title mb-20 ">
                  {rpdata.dbSlogan?.[1].slogan}
                  </h5>
                  <h2 className="tp-section-title">{rpdata.dbSlogan?.[0].slogan}</h2>
                </div>
                <p className="mb-40">{rpdata?.dbHome?.[0].text}</p>
                <div className="row mb-10">
                  <div className="col-sm-6">
                    <div className="tp-choose-timeline ml-15 mb-30">
                      {rpdata.dbServices?.slice(0,5).map((item, index) => {
                        return (
                            <div
                            className="tp-choose-timeline-single mb-20 pl-35 wow fadeInUp"
                            data-wow-delay=".4s"
                            key={index}
                          >
                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                              <Link to="/">
                                {item.name}
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

export default HomeArea;
