import logo from "../../assets/logo.jpg"
import "./Header.css"
import NavBar from "./NavBar/NavBar"
import { NavLink } from "react-router-dom" 

const Header = () => {
    return (
        <header>
        {/* <NavLink to='/'> */}
        <img className="logo_header" src={logo} alt="logo de la tienda"  />
        {/* </NavLink> */}
        <h1><span>Your favorite vintage clothing in one place</span></h1>
        <NavBar />
        </header>
    )
}

export default Header