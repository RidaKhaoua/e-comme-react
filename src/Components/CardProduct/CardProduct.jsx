/* eslint-disable react/prop-types */
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import "./CardProduct.css";
function Card({ img, title, price }) {
  return (
    <div className="cardProduct">
      <div className="cardProduct__image">
        <img src={img} alt="" />
        <div className="cardProduct__shadow"></div>
      </div>
      <div className="cardProduct__content">
        <div className="cardProduct__title">{title}</div>
        <div className="cardProduct__priceQuality-wrapper">
          <div className="cardProduct__price">${price} </div>
          <div className="cardProduct__quality">
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
