import React from "react";
import "./ButtonWithImage.css";

function ButtonWithImage({ image, name }) {
  return (
    <div className="buttonWithImage">
      <button>
        <img src={image} alt="A" />
        <h3>{name}</h3>
      </button>
    </div>
  );
}

export default ButtonWithImage;
