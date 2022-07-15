import React, { useEffect, useState } from "react";
import ItemCount from "../Componentes/ItemCount";

// import ListaAutos from "../data/ListaAutos";
import ItemList from "../Componentes/ItemList";

const films = [
  {
    id: 1,
    modelo: "MDX",
    marca: "Acura",
    precio: "$58981.34",
    anio: 2012,
    imagen: "https://qesot.com/img_dir/cars/32166-acura-mdx-iii-2017-1.jpeg",
  },
  {
    id: 2,
    modelo: "Fiat",
    marca: "Cronos",
    precio: "$58981.34",
    anio: 2020,
    imagen: "https://qesot.com/img_dir/cars/32166-acura-mdx-iii-2017-1.jpeg",
  },
  {
    id: 3,
    modelo: "A1",
    marca: "Audi",
    precio: "$58981.34",
    anio: 2019,
    imagen: "https://qesot.com/img_dir/cars/32166-acura-mdx-iii-2017-1.jpeg",
  },
];

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 2000);
    });

    getData.then((res) => setData(res));
  }, []);

  const onAdd = (a) => {
    alert("Se agrego al carrito");
  };
  return (
    <div>
      <h1>Hola ItemListContainer !!</h1>
      <ItemList data={data} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
