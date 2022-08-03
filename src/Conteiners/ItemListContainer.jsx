import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestoreFetch } from "../Componentes/CartContext";

import ItemList from "../Componentes/ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    firestoreFetch(categoryId)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
