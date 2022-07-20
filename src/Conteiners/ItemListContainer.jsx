import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListaAutos from "../data/ListaAutos";
import ItemList from "../Componentes/ItemList";
import customfetch from "../utils/customFetch";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId === undefined) {
      customfetch(2000, ListaAutos)
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    } else {
      customfetch(
        2000,
        ListaAutos.filter((item) => item.categoryId === categoryId)
      )
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
