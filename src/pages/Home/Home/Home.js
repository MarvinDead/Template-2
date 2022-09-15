import React from "react";
import Footer from "../../../components/shared/Footer/Footer";
import HomeTwoNavbar from "../../Home/HomeTwoNavbar/HomeTwoNavbar";
import HomeArea from "../HomeArea/HomeArea";
import Directories from "../Home/BannerArea/BannerArea";
import AboutArea from "./AboutArea/AboutArea";
import ChoseArea from "./ChoseArea/ChoseArea";
import HeroSection from "./HeroSection/HeroSection";
import ProgressArea from "./ProgressArea/ProgressArea";
import ServicesArea from '../../../pages/Services/Services/ServicesArea/ServicesArea';
import WorkingProcess from "../../../pages/About/About/WorkingProcess/WorkingProcess";
import ContactMap from "../../Contact/Contact/ContactMap/ContactMap";
import Modal from "../Home/Modal/Modal";
import Values from '../../../pages/About/About/WorkingProcess/WorkingProcess';
import AboutBlock from '../../../pages/About/AboutBlock';
import ProjectsArea from '../../Projects/Projects/ProjectsArea/ProjectsArea';

const Home = () => {
  return (
    <>
      <HomeTwoNavbar />
      <HeroSection />
      <HomeArea />
      <Directories />
      <ProgressArea />
      <AboutArea />
      <AboutBlock/>
      <WorkingProcess />
      <ServicesArea />
      <ProjectsArea />
      <ChoseArea />
      <ContactMap />
      <Modal />
      <Footer />
    </>
  );
};

export default Home;
