import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import "./ShopPage.css";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const abortController = new AbortController();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();

    return () => {
      abortController.abort();
    };
  }, []);

  const displayProducts = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div className="shopPage">
      <Header />
      <div className="container">
        <div className="shopPage__products">
          {products.length === 0 && <h1>Loading...</h1>}
          {products.length > 0 && displayProducts}
        </div>
      </div>
          {products.length > 0 && <Footer/>}
    </div>
  );
}

export default ShopPage;
