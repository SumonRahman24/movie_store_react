const getCartStored = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else {
    return [];
  }
};

const saveToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getCartStored();
  cart.push(id);
  saveToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getCartStored();
  const remaining = cart.filter((idx) => idx !== id);
  saveToLS(remaining);
};

export { getCartStored, addToLS, removeFromLS };
