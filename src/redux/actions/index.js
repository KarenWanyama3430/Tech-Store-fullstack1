export const handleSideBarToggleAction = () => {
  return {
    type: "HANDLE_SIDE_BAR_TOGGLE_ACTION",
  };
};

export const handleCartToggleAction = () => {
  return {
    type: "HANDLE_CART_TOGGLE_ACTION",
  };
};

export const sideBarToggleAction = () => {
  return {
    type: "SIDE_BAR_TOGGLE_ACTION",
  };
};

export const setProducts = () => {
  return {
    type: "SET_PRODUCTS",
  };
};

export const handleChangeAction = (textValue) => {
  return {
    type: "HANDLE_CHANGE_ACTION",
    payload: textValue,
  };
};

export const productChange = () => {
  return {
    type: "PRODUCT_CHANGE",
  };
};
export const addCartItem = (item) => {
  return {
    type: "ADD_CART_ITEM",
    payload: item,
  };
};
export const cartItemCost = () => {
  return {
    type: "CART_ITEM_COST",
  };
};

export const closeCart = () => {
  return {
    type: "CLOSE_CART",
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const removeItem = (itemId) => {
  return {
    type: "REMOVE_ITEM",
    payload: itemId,
  };
};
export const removeItemInCartByQuantity = (itemToBeRemoved) => {
  return {
    type: "REMOVE_ITEM_IN_CART_BY_QUANTITY",
    payload: itemToBeRemoved,
  };
};
