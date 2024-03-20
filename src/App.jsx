import React from "react";
import {
  Logo,
  Header,
  Brand,
  AboutMe,
  Services,
  Project,
  Rating,
  FaQ,
  ContactUS,
  Footer,
  Process,
} from "./Index";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Logo />
      <Header />
      <Brand />
      <AboutMe />
      <Services />
      <Process />
      <Project />
      <Rating />
      <FaQ />
      <ContactUS />
      <Footer />
    </div>
  );
};

export default App;
