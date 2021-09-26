import React from "react";
import "./HomeRow.css";
function HomeRow(info) {
  return (
    <div className="homeRow">
      <h3>{info.data.name}</h3>
      <h3>{info.data.count}</h3>
    </div>
  );
}

export default HomeRow;
