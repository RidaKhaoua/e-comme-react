/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../Button/Button";
import ProductList from "../ProductList/ProductList";
import TitleSection from "../TitleSection/TitleSection";
import "./TopCellection.css";
import { useProducts } from "../../Context/Productcontext";

const categories = [
  "All",
  "Jewellery",
  "Accessories",
  "Dresses",
  "Clothes",
  "Footwear",
];

export default function TopCollection() {
  const [categorie, setCategorie] = useState("Accessories");

  const { filterProducts, getAllProducts } = useProducts();

  const handelCategorie = (nameCat) => {
    setCategorie(nameCat);
  };

  const showCategorie = categories.map((cat, index) => (
    <Button
      key={index}
      name={cat}
      changeCategorie={handelCategorie}
      cat={categorie}
    />
  ));

  

  return (
    <div className="topCollection">
      <TitleSection title="collection" subTitle="our top collection" />
      <div className="topCollection__filter">
        {showCategorie}
        </div>
      <ProductList />
    </div>
  );
}
