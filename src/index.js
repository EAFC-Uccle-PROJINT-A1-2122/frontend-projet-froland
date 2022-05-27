import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-projint-a1-2122.eu.auth0.com"
    clientId="RgaIVia8dDph5PzrN98Wos8rxFUgeVvS"
    redirectUri={window.location.origin}
    audience="http://localhost:8080/api"
  >
    <BrowserRouter>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
