import "./NavBar.css";
import CartWidget from "../CartWidget/cartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-nav">
      <ul className="menu-horizontal">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/category/male">Male</NavLink>
          <ul className="menu-vertical"></ul>
        </li>
        <li>
          <NavLink to="/category/female">Female</NavLink>
          <ul className="menu-vertical"></ul>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
