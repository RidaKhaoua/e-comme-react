/* eslint-disable no-unused-vars */

import Product from "../Product/Product";
import "./ProductList.css";
import { useProducts } from "../../Context/Productcontext";
export default function ProductList() {
  const { productsFiltred } = useProducts();

  const getTopCollection = productsFiltred.filter((product) =>product.isTopCollection);
    console.log(getTopCollection)
  const displayData = getTopCollection.map(product => {
    return (
        <Product key={product.id} product={product} />
    )
  })

  return (
    <div className="productList">
      {productsFiltred.length === 0 && <h1>No Products</h1>}
      <div className="productList__container">
        {productsFiltred.length > 0 && displayData}
      </div>
    </div>
  );
}
