import React from "react";
import contactBcg from "../images/contactBcg.jpeg";
import Hero from "../components/Hero";
import ContactComponent from "../components/ContactComponent";
const ContactPage = () => {
  return (
    <React.Fragment>
      <Hero img={contactBcg} />
      <ContactComponent />
    </React.Fragment>
  );
};

export default ContactPage;
