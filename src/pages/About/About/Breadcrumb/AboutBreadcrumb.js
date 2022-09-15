import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';

const imgUrl = require.context('../../../../img/', true);

const AboutBreadcrumb = () => {
   const { rpdata } = useContext(GlobalDataContext);
   return (
      <>
         <Breadcrumb title="About"
         backgroundImage={rpdata?.gallery?.[1]}
         ></Breadcrumb>
      </>
   );
};

export default AboutBreadcrumb;