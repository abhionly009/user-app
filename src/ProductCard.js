import React, { useState } from "react";
import "./ProductCard.css";
import { DeleteRounded } from "@material-ui/icons";
import { EditRounded } from "@material-ui/icons";

function ProductCard({ name, price, imageUrl, brand }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteHandler = () => {
    alert("Are sure you want to delete this product");
  };

  const updateHandler = () => {
    setIsModalOpen(true);
    console.log(brand, name, price);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product__card">
      <div className={isModalOpen ? "show__modal" : "hide__modal"}>
        <input type="text" name="" id="" value={brand} />
        <input type="text" name="" id="" value={name} />
        <input type="text" name="" id="" value={price} />
        <input type="text" name="" id="" value={imageUrl} />

        <button className="updateBtn">Update</button>
        <button className="cancelBtn" onClick={closeModalHandler}>
          Cancel
        </button>
      </div>

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
