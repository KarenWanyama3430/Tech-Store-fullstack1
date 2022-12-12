import React from "react";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/Info";
const AboutPage = () => {
  return (
    <React.Fragment>
      <Hero img={aboutBcg} />
      <Info />
    </React.Fragment>
  );
};

export default AboutPage;
