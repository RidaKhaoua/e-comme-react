/* eslint-disable react/prop-types */
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./CardProduct.css";
import { useProducts } from "../../Context/Productcontext";

function Card({id, img, title, price }) {
  const {addProductToShopList} = useProducts();

  return (
    <div className="cardProduct"> 
      <div className="cardProduct__image">
        <img src={img} alt="" />
        <div className="cardProduct__shadow"></div>
      </div>
      <div className="cardProduct__content">
        <div className="cardProduct__title">{title}</div>
        <div className="cardProduct__quality">
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
        <div className="cardProduct__priceBuy-wrapper">
          <div className="cardProduct__price">${price} </div>
          <div className="cardProduct__buy">
            <button onClick={() => {addProductToShopList(id, img, price, title)}}>
              <ShoppingCartOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
