import react from "react";
import reactDom from "react-dom/client";
import ".index.css";
import App from "next/app";
import { reportWebVitals } from "./reportWebVitals";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
    <react.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </react.StrictMode>
);

reportWebVitals();