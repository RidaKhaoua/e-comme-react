/* eslint-disable react/prop-types */
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import "./Card.css";
function Card({ img, title, price }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="" />
        <div className="card__shadow"></div>
      </div>
      <div className="card__content">
        <div className="card__title">{title}</div>
        <div className="card__priceQuality-wrapper">
          <div className="card__price">${price} </div>
          <div className="card__quality">
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
