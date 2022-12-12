import React, { Component } from "react";
import { handleChangeAction, productChange } from "../redux/actions";
import { connect } from "react-redux";
import styled from "styled-components";

export class FilterProducts extends Component {
  handleChange = (event) => {
    this.props.handleChangeAction(event.target);
    this.props.productChange();
  };
  renderOption = () => {
    return this.props.companyName.map((name) => {
      return (
        <option key={name} value={name}>
          {name}
        </option>
      );
    });
  };
  render() {
    const {
      currentPrice,
      minItemPrice,
      maxItemPrice,
      freeShipping,
      filteredProducts,
    } = this.props;
    return (
      <React.Fragment>
        <div className="row my-5">
          <div className="col-10 mx-auto">
            <FilterWrapper>
              <div>
                <label htmlFor="text">Search Products</label>
                <input
                  id="text"
                  type="text"
                  onChange={this.handleChange}
                  value={this.props.text}
                  name="text"
                  className="filter-item"
                />
              </div>

              <div>
                <label htmlFor="select">Company</label>
                <select
                  name="select"
                  id="select"
                  className="filter-item"
                  onChange={this.handleChange}
                >
                  {this.renderOption()}
                </select>
              </div>
              <div>
                <label htmlFor="currentPrice">
                  <p className="mb-2">
                    Product Price : <span>$ {currentPrice}</span>
                  </p>
                </label>
                <input
                  type="range"
                  name="currentPrice"
                  id="currentPrice"
                  max={maxItemPrice}
                  min={minItemPrice}
                  value={currentPrice}
                  onChange={this.handleChange}
                  className="filter-price"
                />
                {"  "}
              </div>

              <div>
                <label htmlFor="freeShipping" className="mx-2">
                  Free Shipping
                </label>
                <input
                  type="checkbox"
                  name="freeShipping"
                  id="freeShipping"
                  onChange={this.handleChange}
                  checked={freeShipping}
                />
                {"  "}
              </div>
            </FilterWrapper>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <h6 className="text-title">
              Total Products: {filteredProducts.length}
            </h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;

const mapStateToProps = (state) => {
  return {
    text: state.products.text,
    companyName: state.products.companyName,
    currentPrice: state.products.currentPrice,
    minItemPrice: state.products.minItemPrice,
    maxItemPrice: state.products.maxItemPrice,
    freeShipping: state.products.freeShipping,
    filteredProducts: state.products.filteredProducts,
  };
};
export default connect(mapStateToProps, { handleChangeAction, productChange })(
  FilterProducts
);
