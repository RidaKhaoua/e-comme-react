/* eslint-disable react/prop-types */

import "./Product.css"
import Card from '../Card/Card';
export default function Product({product}) {
  return (
    <div className="product">
      <Card img={product.imgUrl} title={product.productName} price={product.price}/>
    </div>
  );
}