import React from "react";
import "./Category.css";

function CategoryCard(data) {
  return (
    <div className="categoryCard">
      <img
        width="100px"
        height="100px"
        src={data.data.url}
        alt={data.data.name}
      />
      <p className="categoryCard__description">{data.data.name}</p>
    </div>
  );
}

export default CategoryCard;
