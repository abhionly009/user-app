import React, { useEffect, useState } from "react";
import requests from "./requests";
import axios from "./axios";
import CityRow from "./CityRow";
import "./City.css";

function City() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  async function getCity() {
    const response = await axios(requests.cities);
    console.log(response.data);
    setCities(response.data);
  }

  async function addCity() {
    const data = {
      name: cityName,
    };
    if (data.name.length < 1) return alert("Please enter valid City name");

    const addCityResponse = await axios.post(requests.addCity, data);
    if (addCityResponse.status === 200) {
      setCityName("");
      setIsAdded(true);
    }
  }

  useEffect(() => {
    console.log("on render");
    getCity();
  }, []);

  useEffect(() => {
    console.log("on Change in is Added");
    getCity();
  }, [isAdded]);

  const addCityHandler = () => {
    addCity();
  };

  return (
    <div className="city">
      <div className="city--add">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        ></input>
        <button onClick={addCityHandler}>Add City</button>
      </div>
      <div className="city__item">
        {cities.map((item) => {
          return <CityRow item={item} key={item.name} />;
        })}
      </div>
    </div>
  );
}

export default City;
