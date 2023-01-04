import "./About.css";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      icons: [
        "Javascript",
        "Typescript",
        "Angular",
        "React",
        "Vue.JS",
        "Node.JS",
        "SQLite3",
      ],
      text: "Meine Fähigkeiten",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(i) {
    this.setState({ text: this.state.icons[i] });
    setTimeout(() => {
      this.setState({ text: "Meine Fähigkeiten" });
    }, 1500);
  }

  render() {
    return (
      <div className="about">
        <div className="aboutMain">
          <div className="profile">
            <img className="image" src={"/img/profile.png"} alt="profile" />
            <div className="mail-adress">
              <div className="email">
                <img className="icon" src={"/icons/email.png"} alt="email" />
                <p>marijanspajic031@gmail.com</p>
              </div>
              <div className="adress">
                <img
                  className="icon"
                  src={"/icons/location.png"}
                  alt="location"
                />
                <p>Karlsruhe, Germany</p>
              </div>
            </div>
          </div>
          <div className="aboutText">
            <h1>Hallo!</h1>
            <h1>Mein Name ist Marijan Spajić</h1>
            <h1>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </h1>
          </div>
        </div>
        <div className="skills">
          <h1 className="skillText">{this.state.text}</h1>
          <div className="skillsIcons">
            <img
              className="s-icon"
              src={"/icons/javascript.png"}
              alt="javascript"
              onClick={() => this.changeTitle(0)}
            />
            <img
              className="s-icon"
              src={"/icons/typescript.png"}
              alt="typescript"
              onClick={() => this.changeTitle(1)}
            />
            <img
              className="s-icon"
              src={"/icons/angular.png"}
              alt="angular"
              onClick={() => this.changeTitle(2)}
            />
            <img
              className="s-icon"
              src={"/icons/react.png"}
              alt="react"
              onClick={() => this.changeTitle(3)}
            />
            <img
              className="s-icon"
              src={"/icons/vue.png"}
              alt="vue"
              onClick={() => this.changeTitle(4)}
            />
            <img
              className="s-icon"
              src={"/icons/node.png"}
              alt="node"
              onClick={() => this.changeTitle(5)}
            />
            <img
              className="s-icon"
              src={"/icons/sql.png"}
              alt="sql"
              onClick={() => this.changeTitle(6)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
