import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/ItemCount.css";
import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumarClick = () => {
    if (count < stock) {
      const aux = count + 1;
      setCount(aux);
    } else {
    }
  };
  const restarClick = () => {
    if (count > initial) {
      const aux = count - 1;
      setCount(aux);
    }
  };

  return (
    <div className="qty mt-5">
      <button onClick={restarClick} className="minus bg-dark">
        -
      </button>
      <input type="" className="count" name="qty" value={count} />
      <button onClick={sumarClick} className="plus bg-dark">
        +
      </button>
      <div className="mt-1">
        <button className="btn btn-primary" onClick={onAdd}>
          Agregar
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
