// In this file we will learn how to send the data to the context.

import React from 'react'
import { useState, useContext } from "react";
// useContext is a hook that allows us to use the values from the context.
// it is also used to update the values in the context or send data to the context.

import UserContext from "../context/UserContext"; // importing the context

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext); // we have not defined the user and setUser here. we are just using the values from the context.

  const handleSubmit = (e) => {
    e.preventDefault();
    // we can use the setUser function from the context to set the user value.
    // we can also use the setUser function to send data to the context
    setUser({ username, password }); // setUser is declared already in the context.
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="username"
        style={{ border: "1px solid black", padding: "10px" }}
      />
       <span>  </span>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
        style={{
          border: "1px solid black",
          padding: "10px",
        }}
      />
      <button
        style={{
          border: "1px solid black",
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
