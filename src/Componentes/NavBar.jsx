import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          React-PiottiMotor
        </Link>
      </div>
      <div
        className="collapse navbar-collapse d-flex justify-content-center"
        id="navbarText"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/1" className="nav-link">
              SUV
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/2" className="nav-link">
              Autos
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <form className="d-flex">
          <CartWidget />
          <button
            className="btn btn-outline-success me-2 navbar-brand"
            type="button"
          >
            Main button
          </button>
        </form>
      </div>
    </nav>
  );
};
export default NavBar;
