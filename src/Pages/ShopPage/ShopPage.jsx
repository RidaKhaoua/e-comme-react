import { useRef } from "react";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import TableOfProducts from "../../Components/TableOfProducts/TableOfProducts";

import "./ShopPage.css";
import { Modalproduct } from "../../Components";
import { useProducts } from "../../Context/Productcontext";
import IsLoading from "../../Components/IsLoading/IsLoading";

function ShopPage() {
  console.log("render shop");
  const {
    productFromApi: { isLoading, products, error },
    getProductById,
  } = useProducts();
  const containerRef = useRef(null);

  // useEffect(() => {
  //   if (id) {
  //     let getIdValue = id.slice(id.indexOf("=") + 1, id.length);
  //     const getProduct = async () => {
  //       if (id) {
  //         setIsLoading(true);

  //         try {
  //           const response = await fetch(
  //             `https://fakestoreapi.com/products/${getIdValue}`
  //           );
  //           const data = await response.json();
  //           setProduct(data);
  //         } catch (e) {
  //           setError(e);
  //         }
  //       }
  //       setIsLoading(false);
  //     };

  //     getProduct();
  //   }
  // }, [id]);

  const displayProducts = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div className="shopPage">
      <div className="showPage__container" ref={containerRef}>
        <Header />
        <TableOfProducts />
        <Modalproduct
          product={getProductById.product}
          isLoading={getProductById.isLoading}
          error={getProductById.error}
        />

        <div className="container">
          {error ? (
            <h1>Somthing doesn't work good Refreche The Page</h1>
          ) : isLoading ? (
            <IsLoading />
          ) : (
            <>
              <div className="shopPage__products">{displayProducts}</div>
            </>
          )}
        </div>
        {isLoading === false && <Footer />}
      </div>
    </div>
  );
}

export default ShopPage;
