import "./Portfolio.css";
import Modal from "./Modal";
import React from "react";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      w1: "snet",
      w2: "issLive",
      w3: "uhrApp",
      w4: "lenser",
      w5: "hungree",
      w6: "watchMarket",
    };
  }

  render() {
    return (
      <div className="porfolio">
        <div className="wrapper">
          <h1>Meine Projekte</h1>
          <div className="mainWrapper">
            <div className="row">
              <h1>Entwicklung</h1>
              <div className="w1 window">
                <Modal
                  text="Die Social Media App SNET habe ich mit JavaScript entwickelt. 
                  Es handelt sich um eine voll funktionstüchtige App, in der man sich ein persönliches Login erstellen, Posts erstellen, liken und kommentieren kann.
                  Als Datenbank habe ich REST API 'MockAPI' benutzt."
                  img="snet.png"
                  class1="btn"
                  class2="btn"
                  btnWeb="Online"
                  btnGit="Github"
                  web="https://snet.onrender.com/"
                  git="https://github.com/spajic031/snet"
                />
              </div>
              <div className="w2 window">
                <Modal
                  text="IssLive ist eine App die Live Video und Position der International Space Station zeigt. 
                  Zur Entwicklung der App nutzte ich React. Die Karten stammen von der Leaflet Bibliothek, die Live Position der Iss von WhereIsIss.at REST API."
                  img="issLive.png"
                  class1="btn"
                  class2="btn"
                  btnWeb="Online"
                  btnGit="Github"
                  web="https://isslive.onrender.com/"
                  git="https://github.com/spajic031/IssLive"
                />
              </div>
              <div className="w3 window">
                <Modal
                  text="Die UhrApp ist eine einfache App in der eine Stoppuhr, ein Timer und ein Wecker inkludiert sind. Entwickelt wurde sie von mir in Vue.js und Vuetify Bibliothek."
                  img="uhrApp.png"
                  class1="btn"
                  class2="btn"
                  btnWeb="Online"
                  btnGit="Github"
                  web="https://uhr.onrender.com/"
                  git="https://github.com/spajic031/uhr "
                />
              </div>
            </div>
            <div className="row">
              <h1>Design</h1>
              <div className="w4 window">
                <Modal img="lenser-long.png" class1="hidden" class2="hidden" />
              </div>
              <div className="w5 window">
                <Modal img="hungree-long.png" class1="hidden" class2="hidden" />
              </div>
              <div className="w6 window">
                <Modal img="wm-long.png" class1="hidden" class2="hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
