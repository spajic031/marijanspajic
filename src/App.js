import "./App.css";

import About from "./components/About";
import { lazy, Suspense } from "react";

const Portfolio = lazy(() =>
  wait(2000).then(() => import("./components/Portfolio"))
);
function link(i) {
  window.location.href = i;
}
function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="mainText">
          <h2>Marijan Spajić</h2>
          <h2>Web App Developer und UX/UI Designer</h2>
          <a href="mailto:marijanspajic92@gmail.com" className="contactBtn">
            Kontaktiere mich
          </a>
          <img className="arrow" src={"/icons/arrow-down.png"} alt="arrow" />
        </div>

        <About />
        <Suspense fallback={<p>Loading...</p>}>
          <Portfolio />
          <h1 className="center">Vielen Dank!</h1>
          <div className="footer">
            <img
              className="s-icon"
              src={"/icons/linkedin.png"}
              alt="javascript"
              onClick={() =>
                link("https://www.linkedin.com/in/marijan-spajic-9677861bb/")
              }
            />
            <img
              className="s-icon"
              src={"/icons/github.png"}
              alt="typescript"
              onClick={() => link("https://github.com/spajic031")}
            />
          </div>
        </Suspense>
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
