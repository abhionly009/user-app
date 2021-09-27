import React from "react";
import "./CityRow.css";

function CityRow(data) {
  return (
    <div className="cityRow">
      <h6>{data.item.name}</h6>
    </div>
  );
}

export default CityRow;
