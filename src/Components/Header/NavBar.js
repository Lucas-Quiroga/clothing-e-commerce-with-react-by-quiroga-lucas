import "./NavBar.css"

const NavBar = () =>{
    return(
        <nav>
      <ul className="menu-horizontal">
        <li>
            <a href="#">Male</a>
            <ul className="menu-vertical">
                <li><a href="#">T-shirt</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Sneakers</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Female</a>
            <ul className="menu-vertical">
                <li><a href="#">T-shirt</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Sneakers</a></li>
            </ul>
        </li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">About</a></li>
      </ul>  
  </nav>
    )
}

export default NavBar

