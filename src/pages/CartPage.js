import React from "react";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";
import Title from "../components/Title";
import { connect } from "react-redux";
import {
  clearCart,
  removeItem,
  addCartItem,
  cartItemCost,
  removeItemInCartByQuantity,
} from "../redux/actions";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash,
} from "react-icons/fa";
const CartPage = ({
  cart,
  cartSubTotal,
  clearCart,
  removeItem,
  addCartItem,
  cartItemCost,
  removeItemInCartByQuantity,
}) => {
  return (
    <React.Fragment>
      <Hero img={storeBcg} />
      <section className="py-5">
        <div className="container">
          <Title title="your cart items" center />
        </div>
        <div className="container-fluid text-center d-none d-lg-block my-5">
          <div className="row">
            <div className="col-lg-2">
              <p className="text-uppercase">Products</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">Name of product</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">price</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">quantity</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">remove</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">total</p>
            </div>
          </div>
        </div>
      </section>
      {cart.map(({ image, title, price, quantity, id }) => {
        return (
          <React.Fragment>
            <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
              <div className="col-10 mx-auto col-lg-2 pb-2">
                <img
                  src={image}
                  alt="product"
                  width="60"
                  className="img-fluid"
                />
              </div>
              <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">product :</span> {title}
              </div>
              <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">price : $</span> {price}
              </div>
              <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                  <FaChevronCircleDown
                    className="text-primary cart-icon"
                    onClick={() => {
                      removeItemInCartByQuantity({
                        image,
                        title,
                        price,
                        quantity,
                        id,
                      });
                      cartItemCost();
                    }}
                  />
                  <span className="text-title text-muted mx-3">{quantity}</span>
                  <FaChevronCircleUp
                    className="text-primary cart-icon"
                    onClick={() => {
                      addCartItem({ image, title, price, quantity, id });
                      cartItemCost();
                    }}
                  />
                </div>
              </div>
              <div
                className="col-10 mx-auto col-lg-2 pb-2"
                onClick={() => {
                  removeItem(id);
                  cartItemCost();
                }}
              >
                <FaTrash className="text-danger cart-icon" />
              </div>
              <div className="col-10 mx-auto col-lg-2 pb-2">
                <strong className="text-muted">
                  item total : ${price * quantity}
                </strong>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <div className="col text-title text-center my-4">
        {cart.length > 0 ? (
          <React.Fragment>
            <button
              type="button"
              class="btn btn-outline-danger text-capitalize mb-4"
              onClick={() => {
                clearCart();
                cartItemCost();
              }}
            >
              clear cart
            </button>
            <h3>Total : ${cartSubTotal}</h3>
          </React.Fragment>
        ) : (
          <h1 style={{ textTransform: "uppercase" }}>
            <strong>Your cart is empty please start adding items</strong>
          </h1>
        )}
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
    cartSubTotal: state.products.cartSubTotal,
  };
};
export default connect(mapStateToProps, {
  clearCart,
  removeItem,
  addCartItem,
  cartItemCost,
  removeItemInCartByQuantity,
})(CartPage);
