import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./Componentes/NavBar";
import ItemListContainer from "../src/Conteiners/ItemListContainer";
import ItemDetallContainer from "./Conteiners/ItemDetallContainer";
import Cart from "./Componentes/Cart";
import CartContextProvider from "./Componentes/CartContext";
import CartWidget from "./Componentes/CartWidget";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/item/:id" element={<ItemDetallContainer />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Cart" element={<CartWidget />}></Route>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
