import logo from "../../assets/logo.jpg";
import "./Header.css";
import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo_header" src={logo} alt="logo de la tienda" />
      </Link>
      <h1>
        <span id="span_header">
          Your favorite vintage clothing in one place
        </span>
      </h1>
      <div className="nav">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
