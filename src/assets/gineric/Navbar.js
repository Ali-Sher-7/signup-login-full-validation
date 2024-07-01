import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const NavigatetoSignup = () => {
    let path = navigate;
    path("/registration");
  };
  const NavigatetoLogin = () => {
    let path = navigate;
    path("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
          <div className="mr-5">
            <button
              className="btn btn-outline-success my-2 my-sm-0 mx-5"
              type="submit"
              onClick={NavigatetoSignup}
            >
              SignUp
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0 mr-5"
              type="submit"
              onClick={NavigatetoLogin}
            >
              LogIn
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
