import { items } from "../productData";
import { checkCartItems, decreaseCartItems } from "../utils/productUtils";

const INITIAL_STATE = {
  sidebarToggle: false,
  cartToggle: false,
  itemCount: 0,
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  companyName: [],
  text: "",
  select: "all",
  currentPrice: 0,
  maxItemPrice: 0,
  minItemPrice: 0,
  freeShipping: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      const newData = items.map((item) => {
        const image = item.fields.image.fields.file.url;
        const id = item.sys.id;
        const data = item.fields;
        return { ...data, id, image };
      });
      const featuredProducts = newData.filter((item) => item.featured);
      const res = newData.map((product) => product.company);

      const test = new Set(res);
      const companyName = ["all", ...test];
      const priceArr = newData.map((item) => item.price);
      const maxItemPrice = Math.max(...priceArr);
      const minItemPrice = Math.min(...priceArr);

      return {
        ...state,
        storeProducts: newData,
        filteredProducts: newData,
        featuredProducts,
        companyName,
        maxItemPrice,
        minItemPrice,
        currentPrice: minItemPrice,
      };
    case "HANDLE_SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: !state.sidebarToggle };
    case "SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: false, cartToggle: false };
    case "HANDLE_CART_TOGGLE_ACTION":
      return { ...state, cartToggle: !state.cartToggle };
    case "HANDLE_CHANGE_ACTION":
      const { name, value, checked, type } = action.payload;
      const checkValue = type === "checkbox" ? checked : value;
      return {
        ...state,
        [name]: checkValue,
      };
    case "PRODUCT_CHANGE":
      let searchedProducts = [...state.storeProducts];

      if (state.text !== "") {
        searchedProducts = searchedProducts.filter((product) =>
          product.title.toLowerCase().includes(state.text.toLowerCase())
        );
      }

      if (state.select !== "all") {
        searchedProducts = searchedProducts.filter((product) =>
          product.title.toLowerCase().includes(state.select.toLowerCase())
        );
      }
      if (state.currentPrice) {
        searchedProducts = searchedProducts.filter(
          (product) => product.price >= state.currentPrice
        );
      }
      if (state.freeShipping) {
        searchedProducts = searchedProducts.filter(
          (product) => product.freeShipping === state.freeShipping
        );
      }
      return { ...state, filteredProducts: searchedProducts };
    case "ADD_CART_ITEM":
      return { ...state, cart: checkCartItems(state.cart, action.payload) };
    case "CART_ITEM_COST":
      const itemCostArr = state.cart.map((item) => {
        return item.price * item.quantity;
      });
      const totalPrice = itemCostArr.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      const itemCountArr = state.cart.map((item) => {
        return item.quantity;
      });
      const itemCount = itemCountArr.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      return { ...state, cartSubTotal: totalPrice, itemCount };
    case "CLOSE_CART":
      return { ...state, cartToggle: false };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      const newItems = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newItems };
    case "REMOVE_ITEM_IN_CART_BY_QUANTITY":
      return { ...state, cart: decreaseCartItems(state.cart, action.payload) };
    default:
      return state;
  }
};
