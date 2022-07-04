import "./App.css";
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import CartWidget from "./Componentes/CartWidget";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
