import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/ItemCount.css";
import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumarClick = (e) => {
    e.stopPropagation();
    if (count < stock) {
      const aux = count + 1;
      setCount(aux);
    } else {
    }
  };
  const restarClick = (e) => {
    e.stopPropagation();
    if (count > initial) {
      const aux = count - 1;
      setCount(aux);
    }
  };

  return (
    <div className="qty mt-5">
      <button onClick={(e) => restarClick(e)} className="minus bg-dark">
        -
      </button>
      <input
        className="count"
        name="qty"
        type="number"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      <button onClick={(e) => sumarClick(e)} className="plus bg-dark">
        +
      </button>
      <div className="mt-1">
        <button
          disabled={stock <= 0}
          className="btn btn-primary"
          onClick={() => onAdd(count)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
