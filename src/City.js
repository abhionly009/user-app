import React, { useEffect, useState } from "react";
import requests from "./requests";
import axios from "./axios";
import CityRow from "./CityRow";
import "./City.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function City() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [error, setError] = useState("");

  async function getCity() {
    const response = await axios(requests.cities);
    setCities(response.data);
  }

  const notify = () => {
    toast.success("City Added Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  async function addCity() {
    setIsAdded(false);
    const data = {
      name: cityName,
    };

    const addCityResponse = await axios.post(requests.addCity, data);
    if (addCityResponse.status === 200) {
      console.log(addCityResponse.data);
      setIsAdded(true);
      notify();
    }
  }

  useEffect(() => {
    getCity();
  }, []);

  useEffect(() => {
    getCity();
  }, [isAdded]);

  const addCityHandler = () => {
    if (cityName.length < 1) {
      setError("City Name is required");
      return;
    }

    addCity();
  };

  return (
    <div className="city">
      <div className="city__toast">
        <ToastContainer />
      </div>

      <div className="city--add">
        <div className="city__inputWithLabel">
          <input
            type="text"
            placeholder="Enter city name"
            className="cityName"
            name="cityname"
            onChange={(e) => {
              setCityName(e.target.value);
              setError("");
            }}
          />
          <label htmlFor="cityname" className="error">
            {error}
          </label>
        </div>

        <button onClick={addCityHandler} className="addCityBtn">
          Add City
        </button>
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
