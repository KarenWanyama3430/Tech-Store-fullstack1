import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SingleProductsPage from "./pages/SingleProductsPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import DefaultPage from "./pages/DefaultPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

import { Route, Switch } from "react-router-dom";
import { setProducts } from "./redux/actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.setProducts();
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideBar />
        <SideCart />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/product/:productId"
            component={SingleProductsPage}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route component={DefaultPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(null, { setProducts })(App);
