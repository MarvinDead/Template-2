import React, { useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import Breadcrumb from '../../../components/SectionHeader';
import Footer from '../../../components/shared/Footer/Footer';
import AboutArea from '../../Home/Home/AboutArea/AboutArea';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import HomeTwoNavbar from '../../Home/HomeTwoNavbar/HomeTwoNavbar';
import AboutBlock from '../AboutBlock';

const About = () => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <HomeTwoNavbar/>
            <Breadcrumb bgimage={rpdata?.gallery?.[3]} title="About"/>
            <AboutArea />
            <WorkingProcess />
            <AboutBlock/>
            <Footer/>
        </>
    );
};

export default About;