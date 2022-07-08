import React from "react";
import ItemCount from "../Componentes/ItemCount";

const ItemListContainer = () => {
  const onAdd = (a) => {
    alert("Se agrego al carrito");
  };
  return (
    <div>
      <h1>Hola ItemListContainer !!</h1>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
