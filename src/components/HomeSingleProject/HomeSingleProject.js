import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Data from "../../api/data.json";

const HomeSingleProject = ({ project_img_num, title }) => {
  return (
    <>
    
      {Data.dbServices.services.map((item, index) => {
        return (
          <div
            className="tp-project z-index swiper-slide mb-30 wow fadeInUp"
            data-wow-delay=".4s"
            
          >
            <div className="tp-project-img" key={index}>
              <img
                src={item.image}
                className="img-fluid"
                alt="img not found"
              />
            </div>
            <div className="tp-project-text">
              <div className="tp-project-text-content">
                <h4 className="tp-project-title">
                  <Link to="/projectsDetails">{item.title}</Link>
                </h4>
              </div>
              <div className="tp-project-text-icon">
                <Link to="/projectsDetails">
                  <i className="text-white">
                    <GoPlus />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HomeSingleProject;
