import React from "react";
import "./LandingPage.css";
import Login from "./Login";
import Register from "./Register";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__left">
        <Login />
      </div>
      <div className="landingPage__right">
        <Register />
      </div>
    </div>
  );
}

export default LandingPage;
