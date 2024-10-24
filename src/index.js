import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./css/hover.css";
import "./css/hover.css.map";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import NotFound from "./components/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <App />
            </div>
          }
        />
                <Route
          path="*"
          element={
            <div>
              <Navbar />
              <NotFound />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
