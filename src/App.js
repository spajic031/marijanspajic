import "./App.css";

import About from "./components/About";
import { lazy, Suspense } from "react";

const Portfolio = lazy(() =>
  wait(2000).then(() => import("./components/Portfolio"))
);

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="mainText">
          <h2>Marijan Spajić</h2>
          <h2>Web App Developer und UX/UI Designer</h2>
          <a href="mailto:marijanspajic031@gmail.com" className="contactBtn">
            Kontaktiere mich
          </a>
          <img className="arrow" src={"/icons/arrow-down.png"} alt="arrow" />
        </div>

        <About />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Portfolio />
        </Suspense>
        <div className="footer">
          {" "}
          <img
            className="s-icon"
            src={"/icons/javascript.png"}
            alt="javascript"
          />
          <img
            className="s-icon"
            src={"/icons/typescript.png"}
            alt="typescript"
          />
          <img className="s-icon" src={"/icons/angular.png"} alt="angular" />
        </div>
      </div>
    </div>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
export default App;
