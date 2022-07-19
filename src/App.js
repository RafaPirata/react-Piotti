import "./App.css";

import NavBar from "./Componentes/NavBar";
// import ItemListContainer from "../src/Conteiners/ItemListContainer";
import ItemDetallContainer from "./Conteiners/ItemDetallContainer";

function App() {
  return (
    <div className="App">
      <NavBar />

      {<ItemDetallContainer />}
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
