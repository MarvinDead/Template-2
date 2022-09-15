import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { FaPhoneAlt } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Data from "../../api/data.json";

const imgUrl = require.context("../../img/", true);

const HomeHeroSingleSlide = ({ setOpen }) => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <div
        className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide"
        data-swiper-autoplay="5000"
      >
        <div
          className="slide-bg"
          data-background="assets/img/slider/slider-bg-1.jpg"
          style={{
            background: `url("${rpdata.stock?.[5]}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="slider-img img-fluid"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-slider-wrapper">
                <div className="tp-slider z-index">
                  <Fade left>
                    <h5 className="tp-slider-subtitle section__sm__title common-yellow-shape w-80 mb-35 text-white">
                      {rpdata.dbSlogan?.[0].slogan}
                    </h5>
                  </Fade>

                  <h2 className="tp-slider-title mb-45 text-white">
                    <Fade right>Remodeling</Fade>
                    <Fade top>You Can </Fade>
                    <Fade top>Count In</Fade>
                  </h2>

                  <div className="tp-slider-btn">
                    <Fade bottom>
                      <a href={`tel:+1${rpdata.dbPrincipal?.phones[0].phone}`} className="theme-btn text-white">
                        <i className="flaticon-enter"></i> Contact Us
                      </a>
                    </Fade>
                  </div>
                </div>

                <div className="tp-slider-video-btn play_btn ml-190">
                  <Link to="/">
                    <img
                      src={rpdata?.dbPrincipal?.favicon}
                      className="p-3"
                      alt="img not found"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSingleSlide;
