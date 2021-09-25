import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "./axios";
import requests from "./requests";
import ProductCard from "./ProductCard";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      const request = await axios.get(requests.allProduct);
      setProducts(request.data);
    }
    fetchDetails();
  }, []);

  return (
    <div className="product">
      {products.map((item) => {
        return (
          <ProductCard
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            brand={item.brand}
          />
        );
      })}
    </div>
  );
}

export default Product;
