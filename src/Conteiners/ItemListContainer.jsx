import React, { useEffect, useState } from "react";

import ListaAutos from "../data/ListaAutos";
import ItemList from "../Componentes/ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(ListaAutos);
      }, 2000);
    });

    getData.then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>Hola ItemListContainer !!</h1>
      <ItemList data={data} />
      {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
    </div>
  );
};

export default ItemListContainer;
