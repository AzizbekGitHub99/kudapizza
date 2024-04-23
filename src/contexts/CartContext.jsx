import { createContext, useState } from "react";

import PropTypes from "prop-types";

import { products } from "../data/products";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );
  const [totalPrice, setTotalPrice] = useState(
    +localStorage.getItem("totalPrice") || 0
  );

  const addToCart = (id) => {
    let newProducts;
    const product = products.find((el) => el.id === id);
    product.quantity = 1;
    newProducts = [...cartProducts, product];
    localStorage.setItem("cartProducts", JSON.stringify(newProducts));
    setCartProducts(newProducts);
    calcPrice();
  };

  const increaseQuantity = (id) => {
    let newProducts = cartProducts.map((el) => {
      if (el.id === id) {
        el.quantity++;
      }
      return el;
    });
    localStorage.setItem("cartProducts", JSON.stringify(newProducts));
    setCartProducts(newProducts);
    calcPrice();
  };

  const decreaseQuantity = (id) => {
    let newProducts;
    const product = cartProducts.find((el) => el.id === id);
    if (product.quantity === 1) {
      newProducts = cartProducts.filter((el) => el.id !== id);
    } else {
      newProducts = cartProducts.map((el) => {
        if (el.id === id) {
          el.quantity--;
        }
        return el;
      });
    }
    localStorage.setItem("cartProducts", JSON.stringify(newProducts));
    setCartProducts(newProducts);
    calcPrice();
  };

  const calcPrice = () => {
    let arr = JSON.parse(localStorage.getItem("cartProducts")) || cartProducts;
    let res =
      arr.reduce((acc, el) => {
        if (el.discount) {
          return (
            acc +
            el.price * el.quantity * (1 - el.discount / 100)
          ).toFixed(2);
        } else {
          return acc + el.price * el.quantity;
        }
      }, 0) || 0;
    localStorage.setItem("totalPrice", res);
    setTotalPrice(res);
  };

  const state = {
    cartProducts,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};
export default CartContextProvider;
