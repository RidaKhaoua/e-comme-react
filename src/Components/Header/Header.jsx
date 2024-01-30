import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Header.css";
import { useState } from "react";
export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const handelShowNave = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <h3>Shopifyo</h3>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contanct us</a>
            </li>
          </ul>
          <div className="header__icons">
            <SearchOutlinedIcon className="header__icon" />
            <Person2OutlinedIcon className="header__icon" />
            <div className="header__shop">
              <LocalGroceryStoreOutlinedIcon className="header__icon shop" />
              <span>0</span>
            </div>
          </div>
        </nav>

        <div className="header__toggle-menu" onClick={handelShowNave}>
          <MenuOutlinedIcon />
        </div>
        {showNav && (
          <div className={`header__menu ${showNav ? "active" : ""}`}>
            <nav className="header__menu-nav">
              <ul>
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contanct us</a>
                </li>
              </ul>
              <div className="header__icons">
                <SearchOutlinedIcon className="header__icon" />
                <Person2OutlinedIcon className="header__icon" />
                <div className="header__shop">
                  <LocalGroceryStoreOutlinedIcon className="header__icon shop" />
                  <span>0</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
