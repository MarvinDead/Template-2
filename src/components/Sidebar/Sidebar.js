import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Data from "../../api/data.json";
import Collapsible from "react-collapsible";

const Sidebar = ({ show, handleClose }) => {
  const { rpdata } = useContext(GlobalDataContext);
  const imgUrl = require.context("../../img/", true);

  const Home = <NavLink to="/">Home</NavLink>;
  const About = <NavLink to="/about">About </NavLink>;
  const Services = <NavLink to="/services">Services </NavLink>;
  const Gallery = <NavLink to="/projects">Gallery</NavLink>;
  const Contact = <NavLink to="/Contact">Contact</NavLink>;

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

  return (
    <>
      <div className="side__bar bg-black">
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mt-2 mb-30">
              <div className="side__bar__logo bg-white p-2 rounded-3">
                <img src={rpdata.dbPrincipal?.logo} alt="img not found" />
              </div>
            </div>

            <Collapsible
              trigger={Home}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>
            <Collapsible
              trigger={About}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>
            <Collapsible
              trigger={Services}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                {rpdata?.dbServices?.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={`/services/${item.name
                          .replace(" ", "-")
                          .toLowerCase()}`}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </Collapsible>
            <Collapsible
              trigger={Gallery}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                {rpdata?.landings?.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={`/projects/${item.name
                          .replace(" ", "-")
                          .toLowerCase()}`}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </Collapsible>
            <Collapsible
              trigger={Contact}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            ></Collapsible>

            <div className="fix">
              <div className="side-info">
                <div className="side-info-content">
                  <div className="tp-mobile-menu"></div>
                  <div className="contact-infos mb-30">
                    <div className="contact-list mb-30">
                      <h4>Contact Info</h4>
                      <ul>
                        <li>
                          <i className="flaticon-pin"></i>
                          {rpdata.dbPrincipal?.location[0].address}
                        </li>
                        <li>
                          {rpdata.dbPrincipal?.phones.map((item, index) => {
                            return (
                              <a
                                href={`tel:${item.phone}`}
                                key={index}
                                className="tp-header-top-info-single-content font-medium text-white mt-3"
                              >
                                <i className="flaticon-phone-call"></i>
                                <span>{item.phone}</span>
                              </a>
                            );
                          })}
                        </li>
                      </ul>
                      <div className="sidebar__menu--social">
                        {rpdata.dbSocialMedia?.redes.map((item, index) => {
                          return (
                            <a
                              key={index}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={`fab fa-${item.icon}`}></i>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
