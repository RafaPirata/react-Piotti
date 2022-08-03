import React, { useEffect, useState } from "react";
import ItemDetail from "../Componentes/ItemDetail";
import { firestoreFetchOne } from "../Componentes/CartContext";

import { useParams } from "react-router";

const ItemDetallContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    firestoreFetchOne(id)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetallContainer;
