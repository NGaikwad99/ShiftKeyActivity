import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "./shiftkey-logo.png";

export default function Form({ setRouter }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, type) => {
    e.preventDefault();
    setUser({ ...user, [type]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("login successful");
    emailjs
      .sendForm(
        "service_3an604u",
        "template_tz9tt8b",
        document.getElementById("form"),
        "hVmkjM02raXPh2jem"
      )
      .then(
        (result) => {
          console.log(result.text);
          setRouter(1);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form id="form" method="GET">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <label>Username: </label> */}
      <input
        type="text"
        value={user.username}
        name="username"
        id="username"
        onChange={(e) => handleChange(e, "username")}
        placeholder="Username"
      />
      {/* <label>Password: </label> */}
      <input
        type="password"
        value={user.password}
        name="password"
        id="password"
        onChange={(e) => handleChange(e, "password")}
        placeholder="Password"
      />
      {user.username && user.password && (
        <button onClick={sendEmail} type="submit">
          Login
        </button>
      )}
    </form>
  );
}
