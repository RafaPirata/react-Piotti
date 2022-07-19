import React from "react";
import Item from "./Item";

const ItemDetail = ({ data = [] }) => {
  return data.map((film) => <Item key={film.id} info={film} />);
};
export default ItemDetail;
