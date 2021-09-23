import React, { useState } from "react";
import ButtonWithImage from "./ButtonWithImage";
import "./Login.css";
import Google from "./google.png";
import GitHub from "./github.png";
import Facebook from "./facebook.png";
import { facebookProvider } from "./config/authMethod";
import { googleProvider } from "./config/authMethod";
import socialMediaAuth from "./service/auth";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    console.log(email, password);
  };

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

      <button onClick={login} className="btn">
        Login
      </button>

      <button
        onClick={() => {
          handleOnClick(googleProvider);
        }}
        className="btn"
      >
        Login with facebook
      </button>

      {/* <ButtonWithImage image={Google} name="Google" />
      <ButtonWithImage image={Facebook} name="Facebook" />
      <ButtonWithImage image={GitHub} name="GitHub" /> */}
    </div>
  );
}

export default Login;
