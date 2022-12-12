import React from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">
              Copyright &copy; tech store {new Date().getFullYear()}. all rights
              reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-around">
            <a href="https://facebook.com">
              <FaFacebook className="icon" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://twitter.com">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
export default Footer;
