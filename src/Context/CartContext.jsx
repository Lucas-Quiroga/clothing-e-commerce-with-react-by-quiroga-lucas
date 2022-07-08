import React, { useContext, useState } from "react";

const Context = React.createContext([]);
const { Provider } = Context;
export const CartContext = () => useContext(Context);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id) ? true : false;
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const addItem = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };

  console.log("cart: ", cart);

  return (
    <Provider
      value={{
        clearCart,
        isInCart,
        removeItem,
        addItem,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
