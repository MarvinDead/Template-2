import React, {useContext } from "react";
import { GlobalDataContext } from "../../../context/context";
import Breadcrumb from '../../../components/SectionHeader';
import Footer from '../../../components/shared/Footer/Footer';
import HomeTwoNavbar from '../../Home/HomeTwoNavbar/HomeTwoNavbar';
import ProjectsArea from './ProjectsArea/ProjectsArea';

const Projects = () => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <HomeTwoNavbar />
            <Breadcrumb bgimage={rpdata?.gallery?.[6]} title="Gallery"/>
            <ProjectsArea />
            <Footer />
        </>
    );
};

export default Projects;