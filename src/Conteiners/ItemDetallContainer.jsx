import React, { useEffect, useState } from "react";
import customfetch from "../utils/customFetch";
// import ListaAutos from "../data/ListaAutos";
import ItemDetail from "../Componentes/ItemDetail";

const films = [
  {
    id: 1,
    modelo: "MDX",
    marca: "Acura",
    precio: "58981.34",
    anio: 2012,
    imagen: "https://qesot.com/img_dir/cars/32166-acura-mdx-iii-2017-1.jpeg",
  },
];

const ItemDetallContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    customfetch(2000, films)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
      {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
    </div>
  );
};

export default ItemDetallContainer;
