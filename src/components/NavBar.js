import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { connect } from "react-redux";
import {
  handleSideBarToggleAction,
  handleCartToggleAction,
} from "../redux/actions";
class NavBar extends React.Component {
  handleSidebarClick = () => {
    this.props.handleSideBarToggleAction();
  };
  handleCartClick = () => {
    this.props.handleCartToggleAction();
  };
  render() {
    const { itemCount } = this.props;
    return (
      <React.Fragment>
        <NavWrapper>
          <div className="nav-center">
            <FaBars className="nav-icon" onClick={this.handleSidebarClick} />
            <img src={logo} alt="tech store logo" />
            <div className="nav-cart">
              <FaCartPlus className="nav-icon" onClick={this.handleCartClick} />
              <div className="cart-items">{itemCount}</div>
            </div>
          </div>
        </NavWrapper>
      </React.Fragment>
    );
  }
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  z-index: 1;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
const mapStateToProps = (state) => {
  return {
    itemCount: state.products.itemCount,
  };
};
export default connect(mapStateToProps, {
  handleSideBarToggleAction,
  handleCartToggleAction,
})(NavBar);
