import React, { useEffect, useState } from "react";
import "./Category.css";
import axios from "./axios";
import requests from "./requests";
import CategoryCard from "./CategoryCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Category() {
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryNameError, setCategoryNameError] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryImageError, setCategoryImageError] = useState("");
  const [isCategoryAdded, setIsCategoryAdded] = useState(false);
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryDescriptionError, setCategoryDescriptionError] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getCategory();
  }, [isCategoryAdded]);

  async function getCategory() {
    const response = await axios.get(requests.allCategory);

    if (response.status === 200) {
      setCategory(response.data);
    }
  }

  const notify = () => {
    toast.success("Category Added Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  async function addCategory() {
    setIsCategoryAdded(false);
    const data = {
      name: categoryName,
      description: categoryDescription,
      url: categoryImage,
    };

    const addCityResponse = await axios.post(requests.addCategory, data);
    if (addCityResponse.status === 200) {
      setIsCategoryAdded(true);
      notify();
    }
  }

  const addCategoryHandler = () => {
    if (
      categoryDescription.length < 1 &&
      categoryName.length < 1 &&
      categoryImage.length < 1
    ) {
      setCategoryNameError("Category Name is required");
      setCategoryImageError("Category Image is required");
      setCategoryDescriptionError("Description is required");
      return;
    }

    if (categoryName.length < 1) {
      setCategoryNameError("Category Name is required");
      return;
    }

    if (categoryImage.length < 1) {
      setCategoryImageError("Category Image is required");
    }

    if (categoryDescription.length < 1) {
      setCategoryDescriptionError("Category Description is required");
    }

    console.log(categoryName, categoryImage, categoryDescription);

    addCategory();
  };

  return (
    <div className="category">
      <div className="category__toast">
        <ToastContainer />
      </div>

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

        <div className="inputWithLabel">
          <input
            type="text"
            name="categoryDescription"
            id=""
            className="categoryName"
            placeholder="Enter Description"
            onChange={(e) => {
              setCategoryDescription(e.target.value);
              setCategoryDescriptionError("");
            }}
          />
          <label htmlFor="categoryDescription" className="error">
            {categoryDescriptionError}
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
