import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Data from "../../../../api/data.json";

const imgUrl = require.context("../../../../img/", true);
const BannerArea = () => {

  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <div className="brand-area pt-80 pb-50">
        <div className="container">
          <h1 className="text-center text-black">Find Us On</h1>
          <div className="brand-active swiper-container">
              <div className="row justify-content-center pd-top-20">
              {rpdata?.dbSocialMedia?.directorios.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 text-center content-directorios"
                key={index}
              >
                <a href={item.url} target="_blank">
                  <img src={item.image}></img>
                </a>
              </div>
            );
          })}
          {rpdata?.dbSocialMedia?.redes.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 text-center content-directorios"
                key={index}
              >
                <a href={item.url} target="_blank">
                  <img src={item.image}></img>
                </a>
              </div>
            );
          })}
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerArea;
