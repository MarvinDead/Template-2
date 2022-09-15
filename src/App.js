import React, { useEffect, useContext, useState } from "react";
import { GlobalDataContext } from "../src/context/context"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About/About";
import Services from "./pages/Services/Services/Services";
import Projects from "./pages/Projects/Projects/Projetcs";
import Contact from "./pages/Contact/Contact/Contact";
import { WOW } from "wowjs";
import ScrollToTop from "./components/ScrollToTop";
import "react-chat-widget/lib/styles.css";
import axios from "axios";
import { ServicesDetail } from "./pages/Services/ServicesDetail";
import { ProjectsDetail } from "./pages/Projects/ProjectsDetail";

const App = () => {
  // wow animation active
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const id = "63234205fd5d7c221d99157d";
  const [rpdata, setrpdata] = useState({});

  //useEffect para peticion al servidor
  useEffect(() => {
    // console.log(“haciendo fetch”)
    async function fetchData() {
      try {
        const response = await axios({
          baseURL: "https://servidorpublico.herokuapp.com/api",
          url: `/paginas/${id}`,
          method: "get",
        });
        console.log(response.data);
        //se convierte la data en el objeto
        setrpdata(JSON.parse(JSON.stringify(response.data)));
        // console.log(rpdata)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
    <GlobalDataContext.Provider value={{ rpdata }}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ServicesDetail />} />
          <Route path="/projects/:id" element={<ProjectsDetail />} />
        </Routes>
      </Router>
      </GlobalDataContext.Provider>
    </>
  );
};

export default App;
