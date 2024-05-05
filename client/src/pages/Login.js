import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const login = () => {
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json() // Parse JSON asynchronously
        }        
      })
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else { // Sucessful login
          sessionStorage.setItem("accessToken", data) // Using session storage for quick and dirty JWT auth
          navigate("/allpatients") // go to allpatients after login
        }        
      })
      .catch((error) => console.log("ERROR", error));
  };

  return (
    <div>
      <Link to="/registration">New? Register Here</Link>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
