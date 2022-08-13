import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../Style/Cart.css";
import {
  serverTimestamp,
  setDoc,
  doc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../data/LIstaEnFirebase";

const Cart = () => {
  const { removeProduct } = useContext(CartContext);
  const test = useContext(CartContext);
  const createOrder = () => {
    let itemsForDB = test.cartList.map((item) => ({
      id: item.id,
      marca: item.marca,
      modelo: item.modelo,
      costo: item.costo,
      qty: item.qty,
    }));
    let order = {
      buyer: {
        email: "rrcamel@hotmail.com",
        name: "Rafael Piotti",
        phone: "3513057343",
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: test.totalPrecio(),
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirestore()
      .then((result) =>
        alert("Tu oreden fue recibida con exito. Codigo de pedido=" + result.id)
      )
      .catch((e) => console.log(e));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });

    test.removeList();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="mt-3 d-flex justify-content-start">
          <Link to="/">
            <button className="btn btn-primary">Continuar de compra</button>
          </Link>
        </div>
        <div className="col-md-6">
          <div className="">
            {test.cartList.length === 0 ? (
              <h5 className="Vacio">
                su carro es vacio !!!
                <img
                  className="ImgVacio"
                  src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/07/18/5f15fdc0e16a3.jpeg"
                  alt=""
                />
              </h5>
            ) : (
              test.cartList.map((item) => (
                <div key={item.id} className="d-flex position-relative">
                  <img
                    src={item.img}
                    className="flex-shrink-0 me-3 imgCart img-thumbnail"
                    alt="imagen"
                  />
                  <div className="TitleCart">
                    <h5 className="mt-0">
                      {item.marca}: {item.modelo}
                    </h5>
                    <p>Cantidad: {item.qty}</p>
                    <p>Precio Unidad: ${item.costo}</p>
                    <p>SubTotal: ${item.costo * item.qty}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => removeProduct(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="col-md-6">
          {test.cartList.length > 0 && (
            <div>
              <div className="">
                <button
                  className="btn bg-danger mt-3 col-md-6"
                  onClick={test.ClearCart}
                >
                  Vaciar la compra
                </button>
              </div>
              <div className="card  mb-3 text-center FondoCart">
                <div className="card-body">
                  <p className="card-title mb-2 fs-3 fw-bold">
                    {test.calcItemsQty()} item
                  </p>
                  <p className="card-title mb-2">
                    Total: ${test.totalPrecio()}
                  </p>
                  <p className="card-title mb-2 text-success">
                    Descuento:10% ${test.totalDescuento()}
                  </p>
                  <button className="btn btn-success" onClick={createOrder}>
                    GENERAR PEDIDO
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
