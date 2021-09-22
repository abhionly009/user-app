import { Button } from "@material-ui/core";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    console.log(email, password);
  };

  return (
    <div>
      <h3>User Managment</h3>

      <form>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your email"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button onClick={login}>Login</Button>
      </form>
    </div>
  );
}

export default Login;
