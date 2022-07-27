import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const ClearCart = () => setCartList([]);

  const isInCart = (id) =>
    cartList.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCartList(cartList.filter((product) => product.id !== id));

  const addToCart = (item, qty) => {
    let newCart;
    let product = cartList.find((product) => product.id === item.id);
    if (product) {
      product.qty += qty;
      newCart = [...cartList];
    } else {
      product = { ...item, qty: qty };
      newCart = [
        ...cartList,
        {
          id: item.id,
          img: item.imagen,
          modelo: item.modelo,
          costo: item.precio,
          marca: item.marca,
          qty: qty,
        },
      ];
    }
    setCartList(newCart);
  };

  const totalPrecio = () => {
    let qtys = cartList.map((item) => item.costo * item.qty);
    return qtys.reduce((previosValue, currentValue) =>
      (previosValue * currentValue).toFixed(2)
    );
  };

  const totalDescuento = () => {
    let qtys = cartList.map(
      (item) => item.costo * item.qty - (item.costo * 10) / 100
    );
    return qtys.reduce((previosValue, currentValue) =>
      (previosValue * currentValue - (previosValue * 10) / 100).toFixed(2)
    );
  };

  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qty);
    return qtys.reduce(
      (previosValue, currentValue) => previosValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        ClearCart,
        isInCart,
        removeProduct,
        totalPrecio,
        totalDescuento,
        calcItemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
