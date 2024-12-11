import { useState } from "react";
import "./nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Can I make if statement if(width>1024){close sidemenu}
  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#">
        <img
          className="header-title-svg"
          src="/detox-header.svg"
          alt="title-logo"
        />
      </a>
      <ul className="li-items">
        <li className="hide-on-mobile">
          <a href="#">За чая</a>
        </li>
        <li className="hide-on-mobile">
          <a href="#">Програми</a>
        </li>
        <li className="hide-on-mobile">
          <a href="#">Блог</a>
        </li>
        <li className="hide-on-mobile">
          <a href="#">BMI Калкулатор</a>
        </li>
        <li className="last-li hide-on-mobile">
          <a href="#">Купи сега</a>
        </li>
        <li>
          <button className="open-menu-btn" onClick={showMenu}>
            <img
              src="../public/images/menu.svg"
              alt="menu button for opening sidebar"
            />
          </button>
        </li>
      </ul>

      <ul className={`sidebar-li-items ${isMenuOpen ? "open" : ""}`}>
        <li>
          <img
            className="sidebar-svg"
            src="/detox-header.svg"
            alt="title-logo"
          />
          <button className="close-menu-btn" onClick={showMenu}>
            <img
              src="../public/images/close.svg"
              alt="close button for closing sidebar"
            />
          </button>
        </li>
        <li>
          <a href="#">За чая</a>
        </li>
        <li>
          <a href="#">Програми</a>
        </li>
        <li>
          <a href="#">Блог</a>
        </li>
        <li>
          <a href="#">BMI Калкулатор</a>
        </li>
        <li className="last-li-side">
          <a href="#">Купи сега</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
