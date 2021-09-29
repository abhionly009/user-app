import React from "react";
import "./ProductCard.css";
import { DeleteRounded } from "@material-ui/icons";
import { EditRounded } from "@material-ui/icons";

function ProductCard({ name, price, imageUrl, brand }) {
  const deleteHandler = () => {
    alert("Are sure you want to delete this product");
  };

  const updateHandler = () => {};
  return (
    <div className="product__card">
      <p className="brand">{brand}</p>
      <p className="name">{name}</p>
      <img src={imageUrl} alt={name} />
      <p className="price">{price}</p>

      <div className="product--alter">
        <button onClick={updateHandler} className="update">
          Update
          <EditRounded />
        </button>
        <button onClick={deleteHandler} className="delete">
          Delete
          <DeleteRounded />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
