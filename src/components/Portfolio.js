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
    this.open = this.open.bind(this);
  }
  open() {
    <div>balbalbab</div>;
  }
  render() {
    return (
      <div className="porfolio">
        <div className="wrapper">
          <h1 className="header-text">Meine Projekte</h1>
          <div className="mainWrapper">
            <div className="row">
              <h1>Entwicklung</h1>
              <div className="w1 window">
                <Modal
                  text="Snet ist eine Social Media App die ich mit Javascript entwickelt habe. Als datenbank habe ich MockAPI webseite benutzt."
                  img="snet1.png"
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
                  text="IssLive ist eine App die Live video und position von International space station zeigt. 
                  Die App habe ich mit React entwickelt. Mit hilfe von Leaflet map bibliothek und WhereIsIss.at REST API für live position der ISS."
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
                  header="Snet"
                  text="Snet je Social network aplikacija koju sam uz pomoc dadasd  asd asd as das dasdasd asd asdas d as dasd asdasdasdas dasd asd asd asd balbalbalbalablablabla."
                />
              </div>
            </div>
            <div className="row">
              <h1>Design</h1>
              <div className="w4 window">
                <Modal img="lenser-long.png" class1="hidden" class2="hidden" />
              </div>
              <div className="w5 window">
                <Modal
                  header="Hungree"
                  text=""
                  img="hungree-long.png"
                  class1="hidden"
                  class2="hidden"
                />
              </div>
              <div className="w6 window">
                <Modal
                  header="Watch Market"
                  text=""
                  img="wm-long.png"
                  class1="hidden"
                  class2="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
