import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import { Link } from "react-router-dom";

const navigation = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: "fas fa-home",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    icon: "fas fa-user",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
    icon: "fas fa-cogs",
  },
  {
    id: 4,
    name: "Gallery",
    link: "/projects",
    icon: "fas fa-briefcase",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
    icon: "fas fa-rss",
  },
];

const Footer = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <footer className="theme-dark-bg bg-black">
        <div className="tp-footer-area-two pt-80 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div className="tp-footer-info-logo mb-35 p-2 rounded-3">
                    <Link to="/">
                      <img
                        src={rpdata?.dbPrincipal?.logo}
                        className="img-fluid"
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="tp-footer-widget-title mb-35">About</h4>
                  <div className="tp-footer-insta">
                    <p className="text-white">
                      {rpdata.dbAbout?.[0].text.substring(0, 192) + "."}
                    </p>
                  </div>
                  <div className="tp-footer-info-social">
                      {rpdata.dbSocialMedia?.redes.map((item, index) => {
                        return (
                          <a
                            key={index}
                            href={`${item.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white"
                          >
                            <i className={`fab fa-${item.icon} text-black`}></i>
                          </a>
                        );
                      })}
                    </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-3 mb-30 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h4 className="tp-footer-widget-title mb-35">Services</h4>
                  <ul className="sub-menu">
                    {rpdata?.dbServices?.slice(0,6).map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                          className="text-white"
                            to="/">
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div
                  className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer-info">
                    <h4 className="tp-footer-widget-title mb-40">Contact</h4>
                    <h6 className="mb-15 d-flex">
                      {" "}
                      <i className="fa fa-location-arrow"> </i>
                      {rpdata.dbPrincipal?.location?.[0].address}
                    </h6>
                    {rpdata.dbPrincipal?.phones.map((item, index) => {
                      return (
                        <h6 className="mb-15 d-flex" key={index}>
                          {" "}
                          <i className="fa fa-phone-alt"> </i>
                          <a href={`tel:+1${item.phone}`}>{item.phone}</a>
                        </h6>
                      );
                    })}
                    <h6 className="mb-15 d-flex">
                      {" "}
                      <i className="fa fa-calendar"> </i>
                      {rpdata?.dbPrincipal?.workdays[0].day}
                    </h6>
                    <h6 className="mb-15 d-flex">
                      {" "}
                      <i className="fa fa-clock"> </i>
                      {rpdata?.dbPrincipal?.workHours[0].hour}
                    </h6>
                    <h6 className="mb-15 d-flex">
                      {" "}
                      <i className="fa fa-credit-card"> </i>
                      {rpdata?.dbPrincipal?.paymentMethod}
                    </h6>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright-area-two z-index pt-30 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-copyright tp-copyright-two text-center ">
                  <p className="m-0">
                    Copyright ©2022{" "}
                    <span className="text-white">
                      {rpdata?.dbPrincipal?.name}
                    </span>
                    . All Rights Reserved Copyright
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <WhatsappChat/>
        <div className="visor_Counter">
          <div class="elfsight-app-e24da79f-e150-4b3f-8303-2f233cbae680"></div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
