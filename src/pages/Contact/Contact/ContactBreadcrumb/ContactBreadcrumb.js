import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import  Data  from '../../../../api/data.json';

const imgUrl = require.context('../../../../img/', true);

const ContactBreadcrumb = () => {
   const { rpdata } = useContext(GlobalDataContext);
   return (
      <>
         <Breadcrumb title="Contact"
         bgimage={rpdata.gallery[6]}
         ></Breadcrumb>
      </>
   );
};


export default ContactBreadcrumb;