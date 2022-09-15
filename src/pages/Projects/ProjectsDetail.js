import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { useParams } from "react-router-dom";
import HomeTwoNavbar from "../Home/HomeTwoNavbar/HomeTwoNavbar";
import Breadcrumb from "../../components/SectionHeader";
import Footer from "../../components/shared/Footer/Footer";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const ProjectsDetail = () => {
  const { rpdata } = useContext(GlobalDataContext);
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <HomeTwoNavbar />
      {rpdata?.landings?.map((item) => {
        if (item.name.replace(" ", "-").toLowerCase() === id) {
          return (
            <div>
              <Breadcrumb bgimage={rpdata?.gallery?.[3]} title={item.name} />
              <div className="container">
                <h1 className="text-center pt-60">Our Recent Projects</h1>
                <div className="gallery-content">
                <Gallery>
                  {item.gallery.map((item, index) => {
                    return (
                      <Item
                        original={item}
                        thumbnail={item}
                        width="1024"
                        height="768"
                        padding="10px"
                      >
                        {({ ref, open }) => (
                          <img ref={ref} onClick={open} src={item} />
                        )}
                      </Item>
                    );
                  })}
                </Gallery>
                </div>
              </div>
            </div>
          );
        }
      })}
      <Footer />
    </div>
  );
};
