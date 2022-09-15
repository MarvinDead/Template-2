import React, { useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import Breadcrumb from '../../../components/SectionHeader';
import Footer from '../../../components/shared/Footer/Footer';
import HomeTwoNavbar from '../../Home/HomeTwoNavbar/HomeTwoNavbar';
import ServicesArea from './ServicesArea/ServicesArea';

const Services = () => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <HomeTwoNavbar/>
            <Breadcrumb bgimage={rpdata?.gallery?.[7]} title="Services"/>
            <ServicesArea />
            <Footer/>
        </>
    );
};

export default Services;