import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, imageUrl, brand }) {
  const addToCartHandler = () => {
    console.log("You added this product to cart");
    console.log(brand, name, price);
  };
  return (
    <div className="product__card">
      <p className="brand">{brand}</p>
      <p className="name">{name}</p>
      <img src={imageUrl} alt={name} />
      <p className="price">{price}</p>

      <button onClick={addToCartHandler}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
