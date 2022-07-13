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
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (cart[itemIndex].quantity === 1) {
      setCart(cart.filter((i) => i.id !== id));
    } else {
      setCart(
        cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
      );
    }
  };

  const addItem = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      setCart(
        cart.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        )
      );
    } else {
      setCart([product, ...cart]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((acc, b) => acc + b.quantity * b.price, 0);
  };

  const totalProduct = () => {
    return cart.reduce((total, value) => {
      return total + value.quantity;
    }, 0);
  };

  return (
    <Provider
      value={{
        clearCart,
        isInCart,
        removeItem,
        addItem,
        totalPrice,
        totalProduct,
        cart,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
