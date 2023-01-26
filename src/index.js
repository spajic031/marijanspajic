import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import { lazy, Suspense } from "react";
import { BarLoader } from "react-spinners";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = lazy(() => import("./App"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <BarLoader
          loading="true"
          color="rgba(54, 152, 214, 1)"
          height="1rem"
          width="100vw"
          speedMultiplier=".5"
        />
      }
    >
      {" "}
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
