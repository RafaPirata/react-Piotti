import React from "react";
import { createContext, useState } from "react";
import { db } from "../data/LIstaEnFirebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

export const CartContext = createContext();

export const firestoreFetch = async (category) => {
  //declaro variable para almacenar lo que traigo de la base de dato
  let cat;
  // genero un condicional por categoria
  if (category) {
    cat = query(
      collection(db, "products"),
      where("categoryId", "==", category)
    );
  } else {
    cat = query(collection(db, "products"));
  }
  // la promesa devuelve y se almacena y esta la mapeo para mostrar
  const querySnapshot = await getDocs(cat);
  const dataFromFirestore = querySnapshot.docs.map((docu) => ({
    id: docu.id,
    ...docu.data(),
  }));
  return dataFromFirestore;
};
//genero funcion para llamar un solo producto de la base de datos
export const firestoreFetchOne = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } else {
    console.log("No existe");
  }
};

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
  const removeList = () => {
    setCartList([]);
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
        removeList,
        totalDescuento,
        calcItemsQty,
        firestoreFetch,
        firestoreFetchOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
