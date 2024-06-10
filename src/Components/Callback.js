// Callback.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Callback() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");

    if (code) {
      // Exchange the authorization code for an access token
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/http://localhost:8080/apps/oauth2/authorize",
          {
            code,
            grant_type: "authorization_code",
            client_id: process.env.ClIENT_ID,
            client_secret: process.env.ClIENT_SECRET,
            redirect_uri: "http://localhost:3000/callback",
          }
        )
        .then((response) => {
          const accessToken = response.data.access_token;
          // Store accessToken in localStorage or state
          localStorage.setItem("accessToken", accessToken);
        })
        .catch((error) => {
          console.error("Token exchange failed:", error);
        });
    }
  }, [location]);

  return (
    <div>
      <h2>Processing login...</h2>
    </div>
  );
}

export default Callback;
