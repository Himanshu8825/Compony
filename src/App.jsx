import React from "react";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Brand from "./pages/Brand";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Rating from "./pages/Rating";
import FaQ from "./pages/FaQ";
import ContactUS from "./pages/ContactUS";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Logo />
      <Header />
      <Brand />
      <AboutMe />
      <Services />
      <Project />
      <Rating />
      <FaQ />
      <ContactUS />
      <Footer />
    </div>
  );
};

export default App;
