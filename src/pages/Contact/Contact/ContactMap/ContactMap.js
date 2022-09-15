import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import Data from "../../../../api/data.json";

const ContactMap = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <div className="tp-map-area pt-60 pb-115">
        <div className="container">
          <div className="row">
            <h1 className="text-center">We Cover {rpdata?.dbPrincipal?.miles} Miles around {rpdata?.dbPrincipal?.location[0].address}</h1>
            <div className="col-lg-12 col-md-6">
              <div className="tp-contact-map">
                <iframe
                  title="contact map"
                  src={rpdata?.dbPrincipal?.location[0].url}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default ContactMap;
