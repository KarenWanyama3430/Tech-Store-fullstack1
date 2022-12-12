import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeCart } from "../redux/actions";
export class SideCart extends Component {
  renderSideCartItems = () => {
    const { cart } = this.props;
    return cart.map((item) => {
      return (
        <li key={item.id} className="cart-item mb-4">
          <img src={item.image} alt="item" width="35" />
          <div className="mt-3"></div>
          <h6 className="text-uppercase">{item.title}</h6>
          <h6 className="text-title text-capitalize">
            Quantity : {item.quantity}
          </h6>
        </li>
      );
    });
  };
  render() {
    const { cartToggle, cartSubTotal } = this.props;

    return (
      <CartWrapper cartToggle={cartToggle}>
        <ul>{this.renderSideCartItems()}</ul>
        <h4 className="text-capitalize text-main">
          Cart Subtotal : ${cartSubTotal}
        </h4>
        <div className="text-center my-5">
          <Link
            to="/cart"
            onClick={() => this.props.closeCart()}
            className="main-link"
          >
            cart page
          </Link>
        </div>
      </CartWrapper>
    );
  }
}

const CartWrapper = styled.div`
  position: fixed;
  top: 53px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${(props) =>
    props.cartToggle ? "translatex(0);" : "translatex(100%);"};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;
const mapStateToProps = (state) => {
  return {
    cartToggle: state.products.cartToggle,
    cart: state.products.cart,
    cartSubTotal: state.products.cartSubTotal,
  };
};
export default connect(mapStateToProps, { closeCart })(SideCart);
