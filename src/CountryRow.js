import { Button } from "@material-ui/core";
import React from "react";
import "./CountryRow.css";
function CountryRow({ name, code }) {
  const handleClick = (e) => {
    console.log(name, code);
  };

  return (
    <div className="countryRow">
      <h1>{name}</h1>
      <h6>{code}</h6>

      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}

export default CountryRow;
