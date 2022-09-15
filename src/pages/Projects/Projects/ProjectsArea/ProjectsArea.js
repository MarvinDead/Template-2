import React, { useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const GalleryPage = (props) => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className="container pd-bottom-50">
      <h1 className="text-center pt-100">Our Recent Projects</h1>
      <div className="gallery-content">
      <Gallery>
        {rpdata?.stock?.map((item, index) => (
          <Item original={item} thumbnail={item} width="1024" height="768" padding="10px">
            {({ ref, open }) => <img ref={ref} onClick={open} src={item} />}
          </Item>
        ))}
      </Gallery>
    </div>
    </div>
    
  );
};

export default GalleryPage;