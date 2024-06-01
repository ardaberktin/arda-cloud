import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); // State to manage login status

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cors-anywhere.herokuapp.com/http://localhost:8080/apps/oauth2/api/v1/token", // Remove CORS proxy
        {
          username,
          password,
          grant_type: "password",
          client_id:
            "Gp7ZFfj0MnEbVYrzLDENBDOlKdRdn2iJq9bRdTqtJdGdcT2aWG2u81sq3BqKXQwe",
          client_secret:
            "jwBG55j3EHORJ6wR8WMtnvCKs3jiUCoE7chpwE1zW712RnK1sNtqIbVAEIpxRePU",
        }
      );
      const accessToken = response.data.access_token;
      // Store accessToken in localStorage or state
      localStorage.setItem("accessToken", accessToken);
      setLoginStatus("success"); // Set login status to success
    } catch (error) {
      console.error("Login failed:", error);
      console.error("Error details:", error.response.data); // Log error response data
      setLoginStatus("fail"); // Set login status to fail
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      {loginStatus === "success" && <p>Logged in successfully!</p>}
      {loginStatus === "fail" && <p>Login failed!</p>}
    </form>
  );
}

export default Login;
