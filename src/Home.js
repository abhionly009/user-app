import React from "react";
import "./Home.css";
import UserList from "./UserList";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <h3>User List</h3>
      {/* <UserList /> */}
      <Product />
    </div>
  );
}

export default Home;
