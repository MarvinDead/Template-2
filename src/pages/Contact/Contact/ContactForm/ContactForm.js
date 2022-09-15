import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen, FaCalendar } from "react-icons/fa";
import Form from "../../../Home/Home/Form/form"

const ContactForm = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <section className="tp-contact-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div
                className="section-title-wrapper-two mb-50 wow fadeInUp text-center"
                data-wow-delay=".2s"
              >
                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                  Get Free Estimate
                </h5>
                <h2 className="tp-section-title heading-color-black">
                  Get In Touch!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="row custom-mar-20">
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaMapMarkerAlt className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Location</h4>
                      {rpdata.dbPrincipal?.location?.[0].address}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaPhoneAlt className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">Phone</h4>
                      {rpdata?.dbPrincipal?.phones.map((items, index) => {
                        return (
                          <a href={`tel:+1${items.phone}`}>{items.phone}</a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                  <div
                    className="tp-contact-info mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="tp-contact-info-icon">
                      <i>
                        {" "}
                        <FaCalendar className="contact_icon" />{" "}
                      </i>
                    </div>
                    <div className="tp-contact-info-text">
                      <h4 className="tp-contact-info-title mb-15">{rpdata?.dbPrincipal?.workdays[0].day}</h4>
                      {rpdata?.dbPrincipal?.workHours[0].hour}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-contact-form">
              <div>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
