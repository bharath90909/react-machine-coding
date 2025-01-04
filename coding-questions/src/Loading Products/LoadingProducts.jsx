import React, { useEffect, useState } from "react";
import classes from "./loadingproducts.module.css";
import { Audio } from "react-loader-spinner";

function LoadingProducts() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );
      try {
        if (!res.ok) {
          throw new Error("Error while fetching data");
        }
        const data = await res.json();
        setProducts((prev) => [...prev, ...data.products]);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    setTimeout(fetchData, 2000);
  }, [count]);

  return (
    <div className={classes.productsContainer}>
      {error && <h1>{error}</h1>}
      {console.log("products", products)}
      {products?.map((product, index) => {
        return (
          <div className={classes.product} key={index}>
            <img
              src={product.thumbnail}
              className={classes.productImg}
              alt=""
            />
            <h1>{product.title}</h1>
          </div>
        );
      })}
      {isLoading && (
        <div className="absolute top-[50%] left-[50%] z-100">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      <button onClick={() => setCount((prev) => prev + 1)}>Load More</button>
    </div>
  );
}

export default LoadingProducts;
