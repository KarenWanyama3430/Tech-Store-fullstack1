import React from "react";
import styled from "styled-components";
import { linkData } from "../redux/linkData";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sideBarToggleAction } from "../redux/actions";
class SideBar extends React.Component {
  handleSideBarToggle = () => {
    this.props.sideBarToggleAction();
  };
  render() {
    const { sidebarToggle } = this.props;
    return (
      <SideWrapper sidebarToggle={sidebarToggle}>
        <ul>
          {linkData.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  to={link.path}
                  onClick={this.handleSideBarToggle}
                  className="sidebar-link"
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </SideWrapper>
    );
  }
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 53px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) =>
    props.sidebarToggle ? "translatex(0);" : "translatex(-100%);"};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
const mapStateToProps = (state) => {
  return {
    sidebarToggle: state.products.sidebarToggle,
  };
};
export default connect(mapStateToProps, { sideBarToggleAction })(SideBar);
