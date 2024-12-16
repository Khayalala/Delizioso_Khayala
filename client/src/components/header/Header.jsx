import { useState } from "react";
import logo from "../../assets/images/Logo.png";
import cartIcon from "../../assets/icons/Cart.svg";
import menu from "../../assets/icons/menu.svg";
import "../../assets/helperCSS/reset.css";
import "./header.css";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/logIn");
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={`header_nav ${isNavOpen ? "showNav" : ""}`}>
        <ul className="header_nav_list">
          <li className="header_nav_list_item">
            <Link to="/">Home</Link>
          </li>
          <li className="header_nav_list_item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="header_nav_list_item">
            <a href="#">About Us</a>
          </li>
          <li className="header_nav_list_item">
            <Link to="/menu">Order online</Link>
          </li>
          <li className="header_nav_list_item">
            <a href="#">Reservation</a>
          </li>
          <li className="header_nav_list_item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="menuIcon" onClick={handleMenuClick}>
        <img src={menu} alt="menu" />
      </div>
      <div className="user_actions">
        {user ? (
          <Button
            className="log_out"
            content="Log out"
            onClick={handleLogout}
          />
        ) : (
          <Button
            className="log_in"
            content={<Link to="/logIn">Log in</Link>}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
