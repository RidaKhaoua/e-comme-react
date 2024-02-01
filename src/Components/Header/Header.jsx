import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Nav/Nav";
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
        <Navigation className="header__nav" />

        <div className="header__toggle-menu" onClick={handelShowNave}>
          <MenuOutlinedIcon />
        </div>
        {showNav && (
          <div className={`header__menu ${showNav ? "active" : ""}`}>
            <Navigation className="header__menu-nav" />
          </div>
        )}
      </div>
    </header>
  );
}
