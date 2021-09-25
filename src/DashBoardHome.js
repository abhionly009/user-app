import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import HomeRow from "./HomeRow";
import "./DashBoardHome.css";

function DashBoardHome() {
  const [home, setHome] = useState([]);
  useEffect(() => {
    async function fetchHomeInfo() {
      const response = await axios.get(requests.home);
      console.log(response.data);
      setHome(response.data);
    }

    fetchHomeInfo();
  }, []);

  return (
    <div className="dashboard">
      {home.map((item) => {
        return <HomeRow data={item} />;
      })}
    </div>
  );
}

export default DashBoardHome;
