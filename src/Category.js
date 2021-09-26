import React, { useEffect, useState } from "react";
import "./Category.css";
import axios from "./axios";
import requests from "./requests";
import CategoryCard from "./CategoryCard";

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function getCategory() {
      const response = await axios.get(requests.allCategory);

      console.log("Getting called ", response);

      setCategory(response.data);
    }

    getCategory();
  }, []);

  return (
    <div className="category">
      {category.map((item) => {
        return <CategoryCard data={item} key={item.id} />;
      })}
    </div>
  );
}

export default Category;
