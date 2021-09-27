import React, { useEffect, useState } from "react";
import "./Category.css";
import axios from "./axios";
import requests from "./requests";
import CategoryCard from "./CategoryCard";

function Category() {
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryNameError, setCategoryNameError] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryImageError, setCategoryImageError] = useState("");

  useEffect(() => {
    async function getCategory() {
      const response = await axios.get(requests.allCategory);

      console.log("Getting called ", response);

      setCategory(response.data);
    }

    getCategory();
  }, []);

  const addCategoryHandler = () => {
    if (categoryName.length < 1 && categoryImage.length < 1) {
      setCategoryNameError("Category Name is required");
      setCategoryImageError("Category Image is required");

      return;
    }

    if (categoryName.length < 1) {
      setCategoryNameError("Category Name is required");
      return;
    }

    if (categoryImage.length < 1) {
      setCategoryImageError("Category Image is required");
    }

    console.log(categoryName, categoryImage);
  };

  return (
    <div className="category">
      <div className="category--add">
        <div className="inputWithLabel">
          <input
            type="text"
            name="categoryName"
            id=""
            className="categoryName"
            placeholder="Enter category name"
            onChange={(e) => {
              setCategoryName(e.target.value);
              setCategoryNameError("");
            }}
          />

          <label htmlFor="categoryName" className="error">
            {categoryNameError}
          </label>
        </div>
        <div className="inputWithLabel">
          <input
            type="text"
            name="categoryImage"
            id=""
            className="categoryImage"
            placeholder="Provide image url"
            onChange={(e) => {
              setCategoryImage(e.target.value);
              setCategoryImageError("");
            }}
          />
          <label htmlFor="categoryImage" className="error">
            {categoryImageError}
          </label>
        </div>
        <button onClick={addCategoryHandler} className="addCategoryBtn">
          Add Category
        </button>
      </div>

      <div className="categoryItem">
        {category.map((item) => {
          return <CategoryCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Category;
