/* eslint-disable react/prop-types */

import { useProducts } from "../../Context/Productcontext";
import { useShopList } from "../../Context/ShopListcontext";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import "./TableOfProducts.css";
import { useEffect, useState } from "react";
import ControleQuantity from "../ControleQuatity/ControleQuantity";

function TableOfProducts() {
  const { open, closeShoplist } = useShopList();

  const {
    shopingList,
    deleteProduct,
    idProductSelected,
    updateId,
  } = useProducts();
  const [idProduct, setIdproduct] = useState([]); // [] | [1]
  // skip in the first load
  useEffect(() => {
    if (idProductSelected !== 0) // 0 - 0  | 1 - 0
      setIdproduct([...idProduct, idProductSelected]);
  }, [idProductSelected]);

  // work when click on button delete
  const handelUpdatIdProduct = (id) => {
    let newIds = idProduct.filter((product) => product !== id);
    setIdproduct([...newIds]);
  };

  const displayData = shopingList.map((item) => {
    return (
      <div
        key={item.id}
        className={`table-products__content ${
          idProduct.some((product) => product === item.id) ? "active" : ""
        } `}>
        <div className="table-products__image">
          <img src={item.img} alt="" />
        </div>
        <div className="table-products__info">
          <div className="table-products__title-qantity-wraper">
            <div className="table-products__title">{item.title}</div>
            <div className="table-products__quantity">
              {/* <button
                onClick={() => {
                  minQuantitiy(item.id);
                }}>
                -
              </button>
              <input readOnly type="text" value={item.qty ? item.qty : 0} />
              <button
                onClick={() => {
                  setQty(item.qty)
                  addQuantitiyPlus(item.id, qty);
                }}>
                +
              </button> */}
              <ControleQuantity id={item.id} qtyProduct={item.qty}/>
            </div>
            <div className="table-products__price">${item.totalPrice === 0 ? item.price : item.totalPrice}</div>
          </div>
          <div className="table-products__btn-remove">
            <button
              onClick={() => {
                deleteProduct(item.id);
                handelUpdatIdProduct(item.id);
                updateId(0);
              }}>
              <DeleteOutlineOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="table-products-container">
      <div className={`table-products ${open ? "show" : ""}`}>
      <div className="close" onClick={closeShoplist}>
        X
      </div>
      <h1 className="table-products__title">
        <ShoppingBagOutlinedIcon />
        <span>Your Cart</span>
      </h1>
      <div className="table-products__container">{displayData}</div>
      <div className="table-products__checkout">
        <button>Checkout</button>
      </div>
    </div>
    </div>
    
  );
}

export default TableOfProducts;
