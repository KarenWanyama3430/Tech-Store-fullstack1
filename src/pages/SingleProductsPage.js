import React from "react";
import { connect } from "react-redux";
import { addCartItem, cartItemCost } from "../redux/actions";
import { Link } from "react-router-dom";

const SingleProductsPage = ({ singleProduct, addCartItem, cartItemCost }) => {
  if (singleProduct) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <img
                src={require(`../../public/${singleProduct.image}`)}
                className="img-fluid"
                alt={singleProduct.title}
              />
            </div>
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <h5 className="text-title mb-4">Model: {singleProduct.title}</h5>
              <h5 className="text-capitalize text-muted mb-4">
                Company: {singleProduct.company}
              </h5>
              <h5 className="text-main text-capitalize mb-4">
                Price: ${singleProduct.price}
              </h5>
              <p className="text-capitalize text-title mt-3">
                Some Info About The Product
              </p>
              <p>{singleProduct.description}</p>
              <button
                className="main-link"
                style={{ margin: "0.75rem" }}
                onClick={() => {
                  addCartItem({
                    id: singleProduct.id,
                    image: require(`../../public/${singleProduct.image}`),
                    title: singleProduct.title,
                    price: singleProduct.price,
                  });
                  cartItemCost();
                }}
              >
                add to cart
              </button>
              <Link
                className="main-link"
                style={{ margin: "0.75rem" }}
                to="/products"
              >
                back to products
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state, ownProps) => {
  const { productId } = ownProps.match.params;
  return {
    singleProduct: state.products.storeProducts[productId],
  };
};
export default connect(mapStateToProps, { addCartItem, cartItemCost })(
  SingleProductsPage
);
