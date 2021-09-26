import React, { useState } from "react";
import "./Login.css";
import { googleProvider } from "./config/authMethod";
import socialMediaAuth from "./service/auth";
import axios from "./axios";
import requests from "./requests";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  let history = useHistory();

  function loginUserHandler() {
    const data = {
      emailId: email,
      password: password,
    };

    console.log(data);
    async function login() {
      const response = await axios.post(requests.login, data);
      console.log(response);
      setUser(response.data);
      localStorage.setItem("userinfo", response.data.userInfo);
      console.log(user);
      history.push("/total");
    }

    login();
  }

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <div className="login">
      <input
        className="userInput"
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        className="userInput"
        placeholder="Enter your password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={loginUserHandler} className="btn">
        Login
      </button>

      <button
        onClick={() => {
          handleOnClick(googleProvider);
        }}
        className="btn"
      >
        Login with Google
      </button>

      {/* <ButtonWithImage image={Google} name="Google" />
      <ButtonWithImage image={Facebook} name="Facebook" />
      <ButtonWithImage image={GitHub} name="GitHub" /> */}
    </div>
  );
}

export default Login;
