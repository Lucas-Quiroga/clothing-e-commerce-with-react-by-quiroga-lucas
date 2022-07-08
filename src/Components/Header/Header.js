import logo from "../../assets/logo.jpg";
import "./Header.css";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <img className="logo_header" src={logo} alt="logo de la tienda" />
      <h1>
        <span>Your favorite vintage clothing in one place</span>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
