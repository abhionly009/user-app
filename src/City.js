import React, { useEffect, useState } from "react";
import requests from "./requests";
import axios from "./axios";
import CityRow from "./CityRow";
import "./City.css";

function City() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCity() {
      const response = await axios(requests.cities);
      console.log(response.data);
      setCities(response.data);
    }
    getCity();
  }, []);

  return (
    <div className="city">
      {cities.map((item) => {
        return <CityRow item={item} />;
      })}
    </div>
  );
}

export default City;
