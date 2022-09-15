import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import { Link } from "react-router-dom";
import Data from "../../../../api/data";

const WorkingProcess = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <section className="tp-feature-area-three pt-120 pb-80 bg-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-wrapper text-center mb-45 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                {rpdata.dbSlogan?.[5].slogan}
                </h5>
                <h2 className="tp-section-title mb-25 heading-color-black">
                {rpdata.dbSlogan?.[6].slogan}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {rpdata?.dbValues?.map((item, index) => {
              return (
                <div className="col-xl-4 col-sm-6" key={index}>
                  <div
                    className="tp-feature-three text-center mb-30 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-feature-three-icon mb-30">
                      <img
                        src="assets/img/icon/feature-bg.png"
                        className="img-fluid"
                        alt="img not found"
                      />
                      <i className="flaticon-booking"></i>
                    </div>
                    <div className="tp-feature-three-text">
                      <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                        <Link to="/">{item.title}</Link>
                      </h4>
                      <p>
                        {item.description}
                      </p>
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

export default WorkingProcess;
