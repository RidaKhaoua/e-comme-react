/* eslint-disable react/prop-types */

import { useProducts } from "../../Context/Productcontext";
import "./Button.css"
export default function Button({ name, changeCategorie, cat }) {
  const { filterProducts, getAllProducts } = useProducts();
    

  return (
    <button 
    className={`button-filter ${name === cat ? "active" : ""} `}
    onClick={() => {
        changeCategorie(name)
        if(name === "All") {
          getAllProducts(name)
        } else {
          filterProducts(name)
        }
    }}
    >
      {name}
    </button>
  );
}
