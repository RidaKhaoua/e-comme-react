
import { useProducts } from "../../Context/Productcontext";
import { useShopList } from "../../Context/ShopListcontext";
import "./TableOfProducts.css";

function TableOfProducts() {
  const { open, closeShoplist,  } = useShopList();
  const {shopingList, addQuantitiyPlus, minQuantitiy, deleteProduct} = useProducts();
  // const [QuantityState, setQuantitiyState] = useState(0);

  const displayData = shopingList.map((item) => {
    console.log(item.qty)
    return (
      <div key={item.id} className="table-products__content">
        <img src={item.img} alt="" />
        <div className="table-products__info">
          <div className="table-products__title-qantity-wraper">
            <div className="table-products__title">{item.title}</div>
            <div className="table-products__quantity">
              <button onClick={() => {minQuantitiy(item.id)}}>-</button>
              <input type="text" value={item.qty}/>
              <button onClick={() => {addQuantitiyPlus(item.id)}} >+</button>
            </div>
          <div className="table-products__price" style={{color:"black", marginTop:"10px", fontWeight:"700"}}>${item.price}</div>    
          </div>
          <div className="table-products__btn-remove">
            <button onClick={() => {deleteProduct(item.id)}}>remove</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={`table-products ${open ? "show" : ""}`}>
      <div className="close" onClick={closeShoplist}>
        X
      </div>
      {shopingList.length > 0 && displayData }
    </div>
  );
}

export default TableOfProducts;
