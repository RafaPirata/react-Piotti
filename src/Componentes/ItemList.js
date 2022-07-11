import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.name}
      price={item.cost}
      pictureUrl={item.image}
      stock={item.stock}
    />
  ));
};

export default ItemList;
