export const checkCartItems = (itemsInCart, itemToCart) => {
  const checkItemInCart = itemsInCart.find((item) => item.id === itemToCart.id);
  if (checkItemInCart) {
    return itemsInCart.map((item) => {
      return item.id === itemToCart.id
        ? { ...itemToCart, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...itemsInCart, { ...itemToCart, quantity: 1 }];
};

export const decreaseCartItems = (itemsInCart, itemToRemove) => {
  const checkItemInCart = itemsInCart.find(
    (item) => item.id === itemToRemove.id
  );
  if (checkItemInCart.quantity === 1) {
    return itemsInCart.filter((item) => item.id !== itemToRemove.id);
  }
  return itemsInCart.map((item) => {
    return item.id === itemToRemove.id
      ? { ...itemToRemove, quantity: item.quantity - 1 }
      : item;
  });
};
