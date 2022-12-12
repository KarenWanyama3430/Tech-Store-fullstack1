import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Title from "./Title";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

const Featured = ({ featuredProducts }) => {
  if (featuredProducts) {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="featured products" center="true" />
          <div className="row my-5">
            {featuredProducts.map((product) => {
              return (
                <FeaturedWrapper
                  key={product.id}
                  className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3"
                >
                  <div className="card">
                    <img
                      src={product.image}
                      alt="product"
                      className="card-img-top p-5"
                      style={{ height: "320px" }}
                    />
                    <div className="product-icons">
                      <Link to={`/product/${product.id}`}>
                        <FaSearch className="icon" />
                      </Link>
                      <FaCartPlus className="icon" />
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <p className="mb-0">{product.title}</p>
                      <p className="mb-0 text-main">${product.price}</p>
                    </div>
                  </div>
                </FeaturedWrapper>
              );
            })}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <Link to="/products" className="main-link">
                our products
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

const FeaturedWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const mapStateToProps = (state) => {
  return {
    featuredProducts: state.products.featuredProducts,
  };
};
export default connect(mapStateToProps)(Featured);
