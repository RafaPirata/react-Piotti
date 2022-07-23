import React, { useEffect, useState } from "react";
import customfetch from "../utils/customFetch";
import ListaAutos from "../data/ListaAutos";
import ItemDetail from "../Componentes/ItemDetail";

import { useParams } from "react-router";

const ItemDetallContainer = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      customfetch(2000, ListaAutos)
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    } else {
      customfetch(
        2000,
        ListaAutos.filter((item) => item.id === parseInt(id))
      )
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetallContainer;
