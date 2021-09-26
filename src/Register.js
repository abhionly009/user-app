import React, { useState } from "react";
import "./Register.css";
import axios from "./axios";
import requests from "./requests";
import { Label } from "@material-ui/icons";

function Regiter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [nameError, setNameError] = useState("Name is required filed");
  const [emailError, setEmailError] = useState("Email Field is required");
  const [passwordError, setPasswordError] = useState("");
  const [mobileError, setMobileError] = useState("");

  function registerUserHandler(e) {
    e.preventDefault();
    console.log(e);

    const data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    };

    async function registerUser() {
      const response = await axios.post(requests.signup, data);
      console.log(response);
    }

    registerUser();
  }

  return (
    <div className="register">
      <input
        className="userInput"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="userInput"
        type="email"
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="userInput"
        type="password"
        placeholder="Enter your password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        className="userInput"
        type="number"
        placeholder="Enter your mobile"
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <button
        className="registerbtn"
        onClick={(e) => {
          registerUserHandler(e);
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Regiter;
