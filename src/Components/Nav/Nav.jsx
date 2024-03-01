/* eslint-disable react/prop-types */

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link } from 'react-router-dom';
import { useProducts } from "../../Context/Productcontext";
import { useShopList } from "../../Context/ShopListcontext";
function Navigation({className}) {
  const {shopingList} = useProducts();
  const {showShoplist} = useShopList();
  return (
    <div className={className}>
        <ul>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shopPage">Shop</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About us</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contanct us</Link>
                </li>
              </ul>
          <div className="header__icons">
            <SearchOutlinedIcon className="header__icon" />
            <Person2OutlinedIcon className="header__icon" />
            <div className="header__shop">
              <button  onClick={showShoplist} style={{cursor:"pointer"}}>
              <LocalGroceryStoreOutlinedIcon className="header__icon shop" />
              <span>{shopingList.length}</span>
              </button>
            </div>
          </div>
    </div>
  )
}

export default Navigation;