import React, { useState } from "react";
import "./Register.css";
import ButtonWithImage from "./ButtonWithImage";
import Google from "./google.png";
import GitHub from "./github.png";
import Facebook from "./facebook.png";

function Regiter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  function registerUserHandler() {
    console.log(name, email, password, mobile);
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
      <button className="registerbtn" onClick={registerUserHandler}>
        Register
      </button>

      {/* <ButtonWithImage image={Google} name="Google" />
      <ButtonWithImage image={Facebook} name="Facebook" />
      <ButtonWithImage image={GitHub} name="GitHub" /> */}
    </div>
  );
}

export default Regiter;
