import React, { useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import Breadcrumb from '../../../components/SectionHeader';
import Footer from '../../../components/shared/Footer/Footer';
import ContactForm from './ContactForm/ContactForm';
import ContactMap from './ContactMap/ContactMap';
import HomwTwoNavbar from '../../Home//HomeTwoNavbar/HomeTwoNavbar';

const Contact = () => {
   const { rpdata } = useContext(GlobalDataContext);
   return (
      <>
         <HomwTwoNavbar/>
         <Breadcrumb bgimage={rpdata?.gallery?.[8]} title="Contact"/>
         <ContactMap />
         <ContactForm />
         <Footer />
      </>
   );
};

export default Contact;