import React, { useState, useEffect } from "react";
import ItemCount from "../Componentes/ItemCount";
// import ListaAutos from "../data/ListaAutos";
import ItemList from "../Componentes/ItemList";
const { ListaAutos } = require("../data/ListaAutos");

let is_ok = true;

const customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(task);
      } else {
        reject("Error in the customFetch :(");
      }
    }, time);
  });
};

const ItemListContainer = () => {
  const [autoList, setAutoList] = useState([]);

  useEffect(() => {
    customFetch(2000, ListaAutos)
      .then((res) => setAutoList(res))
      .catch((err) => console.log(err));
  }, [autoList]);

  // const myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(ListaAutos);
  //   }, 2000);
  // });
  // myPromise.then((res) => {
  //   setAutoList(res);
  // });

  const onAdd = (a) => {
    alert("Se agrego al carrito");
  };
  return (
    <div>
      <h1>Hola ItemListContainer !!</h1>
      <ItemList items={autoList} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
