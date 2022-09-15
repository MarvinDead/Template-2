import React, { useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';

const ServicesBreadcrumb = () => {
   const rpdata  = useContext(GlobalDataContext);
   return (
      <>
         <Breadcrumb title="Services"
         bgimage={rpdata.gallery?.[2]}
         ></Breadcrumb>
      </>
   );
};


export default ServicesBreadcrumb;