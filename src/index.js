import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style/style.sass";
import App from "../src/components/app/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
