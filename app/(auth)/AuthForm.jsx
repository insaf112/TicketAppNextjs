"use client";
import React, { useState } from "react";
// import { useServerLogin } from "./login/page";
// import { useServerSignup } from "./signup/page";
const AuthForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const handleSubmitLogin = useServerLogin();
  //   const handleSubmitSignup = useServerSignup();
  //   const handleSubmit = type == "login" ? handleSubmitLogin : handleSubmitSignup;
  return (
    <form action="" onSubmit={(e) => handleSubmit(e, email, password)}>
      <label htmlFor="">
        <span>Email : </span>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <span>Password : </span>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  );
};

export default AuthForm;
