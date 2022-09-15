import { useState } from "react";
import ServicePageArea from "../../../../components/ServiceArea/ServicePageArea";
import Modal from "../../../Services/Modal/ModalServices";

import Data from "../../../../api/data";

const ServicesArea = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const getData = (img, title, description, id) => {
    let temData = [img, title, description, id];
    console.log(temData);
    setTempdata((itme) => [1, ...temData]);
    return setModel(true);
  };

  return (
    <>
      <section className="tp-service-area-three pt-60 pb-90">
        <div className="row justify-content-center">
        <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">{Data.slogans.slogan1}</h5>
                        <h2 className="tp-section-title heading-color-black">Our Services</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
          {props.itemServices
            ? Data.slice(0, props.itemServices).map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="single-product-wrap style-bottom-radius">
                      <div className="thumb">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="product-details-inner">
                        <h4 className="text-capitalize">{item.title}</h4>
                        <p className="pb-4 text-truncate">{item.description}</p>
                        <button
                          className="btn btn-base read-more"
                          onClick={() =>
                            getData(
                              item.image,
                              item.title,
                              item.description,
                              item.id
                            )
                          }
                        >
                          <i className="la la-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : Data.dbServices.services.map((item, index) => {
                return (
                  <ServicePageArea
                    key={index}
                    service_image_num={item.image}
                    ser_icon_img="home"
                    ser_title={item.title}
                    ser_description={item.description.text}
                    event_click={() =>
                      getData(item.image, item.title, item.description, item.id)
                    }
                  />
                );
              })}
          {model === true ? (
            <Modal
              img={tempdata[1]}
              title={tempdata[2]}
              description={tempdata[3]}
              hide={() => setModel(false)}
            />
          ) : (
            ""
          )}
        </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
