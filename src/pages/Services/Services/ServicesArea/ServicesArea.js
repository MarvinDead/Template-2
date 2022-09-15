import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import ServicePageArea from "../../../../components/ServiceArea/ServicePageArea";
import Modal from "../../Modal/ModalServices";

import Data from "../../../../api/data";
const imgUrl = require.context('../../../../img/', true);

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
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <>
      <section className="tp-service-area-three pt-60 pb-90">
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-wrapper text-center mb-55 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h2 className="tp-section-title heading-color-black">
                  Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {props.itemServices
              ? rpdata?.slice(0, props.itemServices).map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="single-product-wrap style-bottom-radius">
                        <div className="thumb">
                          <img src={item.description[0].img} alt={item.name} className="img-card-services" />
                        </div>
                        <div className="product-details-inner">
                          <h4 className="text-capitalize">{item.name}</h4>
                          <p className="pb-4 text-truncate">
                            {item.description[0].text}
                          </p>
                          <ul>
                          </ul>
                          <button
                            className="btn btn-base read-more"
                            onClick={() =>
                              getData(
                                item.description[0].img,
                                item.name,
                                item.description[0].text,
                                item.description.lists.map((item) => item),
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
              : rpdata?.dbServices?.map((item, index) => {
                  return (
                    <ServicePageArea
                      key={index}
                      service_image_num={item.description[0].img}
                      ser_icon_img="home"
                      ser_title={item.name}
                      ser_description={item.description[0].text}
                      event_click={() =>
                        getData(
                          item.description[0].img,
                          item.name,
                          item.description.map((item) => {
                            return (
                              <div>
                                <p>{item.text}</p>
                                {
                                  item.lists ?
                                  item.lists.map ((item) => <li className="list-unstyle">{item}</li>)
                                  : null
                                }
                                <br />
                              </div>
                            );
                          }),
                          item.value,
                          item.id
                        )
                      }
                    />
                  );
                })}
            {model === true ? (
              <Modal
              img={tempdata[1]}
              name={tempdata[2]}
              description={tempdata[3]}
              lists={tempdata[4]}
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
