import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpeg";
import Services from "../components/Services";
import Featured from "../components/Featured";
const HomePage = () => {
  return (
    <div>
      <Hero title="awesome gadgets" max="true" img={mainBcg}>
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </div>
  );
};

export default HomePage;
