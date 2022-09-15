import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { useParams } from "react-router-dom";
import HomeTwoNavbar from "../Home/HomeTwoNavbar/HomeTwoNavbar";
import Breadcrumb from "../../components/SectionHeader";
import Footer from "../../components/shared/Footer/Footer";
import ServiceDetailBlock from "./ServicesDetailBlock";
import ContactMap from "../Contact/Contact/ContactMap/ContactMap";
import ChoseArea from "../Home/Home/ChoseArea/ChoseArea";

export const ServicesDetail = () => {
  const { rpdata } = useContext(GlobalDataContext);
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <HomeTwoNavbar />
      {rpdata?.dbServices?.map((item) => {
        if (item.name.replace(" ", "-").toLowerCase() === id) {
          return (
            <div>
              <Breadcrumb bgimage={rpdata?.gallery?.[8]} title={item.name} />
              <ServiceDetailBlock
                title={item.name}
                bgimage={item.description?.[0].img}
                subTitle={item.subTitle}
                smText={item.description.map((item) => {
                  return <p>{item.text}</p>;
                })}
              />
            </div>
          );
        }
      })}
      <ChoseArea/>
      <ContactMap/>
      <Footer />
    </div>
  );
};
