/* eslint-disable react/prop-types */

import "./Product.css"
import Card from '../CardProduct/CardProduct';
export default function Product({product}) {
  return (
    <div className="product">
      <Card id={product.id} img={product.image} title={product.title} price={product.price}/>
    </div>
  );
}
