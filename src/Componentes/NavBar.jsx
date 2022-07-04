import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React-Piotti
        </a>
      </div>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarText"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
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
