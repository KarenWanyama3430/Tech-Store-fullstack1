import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products"],
};

const reducers = combineReducers({
  products: productsReducer,
});

export default persistReducer(persistConfig, reducers);
