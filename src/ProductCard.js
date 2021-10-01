import React, { useState } from "react";
import "./ProductCard.css";
import { DeleteRounded } from "@material-ui/icons";
import { EditRounded } from "@material-ui/icons";

function ProductCard({ name, price, imageUrl, brand, uniqueId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedName, setUpdateName] = useState(name);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedImage, setUpdateImage] = useState(imageUrl);
  const [updatedBrand, setUpdatedBrand] = useState(brand);

  const deleteHandler = () => {
    alert("Are sure you want to delete this product");
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
    console.log(brand, name, price, uniqueId);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const updateProductHandler = () => {
    const data = {
      name: updatedName,
      brand: updatedBrand,
      price: updatedPrice,
      imageUrl: updatedImage,
      id: uniqueId,
    };

    console.log(data);
  };

  return (
    <div className="product__card">
      <div className={isModalOpen ? "show__modal" : "hide__modal"}>
        <input
          type="text"
          name=""
          id=""
          defaultValue={brand}
          onChange={(e) => {
            setUpdatedBrand(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          defaultValue={name}
          onChange={(e) => {
            setUpdateName(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          defaultValue={price}
          onChange={(e) => {
            setUpdatedPrice(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          defaultValue={imageUrl}
          onChange={(e) => {
            setUpdateImage(e.target.value);
          }}
        />

        <button className="updateBtn" onClick={updateProductHandler}>
          Update
        </button>
        <button className="cancelBtn" onClick={closeModalHandler}>
          Cancel
        </button>
      </div>

      <p className="brand">{brand}</p>
      <p className="name">{name}</p>
      <img src={imageUrl} alt={name} />
      <p className="price">{price}</p>

      <div className="product--alter">
        <button onClick={openModalHandler} className="update">
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
