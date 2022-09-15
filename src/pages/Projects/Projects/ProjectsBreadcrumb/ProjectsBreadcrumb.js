import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import  Data  from '../../../../api/data.json';

const imgUrl = require.context('../../../../img/', true);

const ProjectsBreadcrumb = () => {
   const { rpdata } = useContext(GlobalDataContext);
   return (
      <>
         <Breadcrumb title="Gallery"
         bgimage={rpdata.gallery[5]}
         ></Breadcrumb>
      </>
   );
};

export default ProjectsBreadcrumb;