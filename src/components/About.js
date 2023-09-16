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
        "PostgreSQL",
      ],
      text: "Meine Fähigkeiten",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(i) {
    this.setState({ text: this.state.icons[i] });
    setTimeout(() => {
      this.setState({ text: "Meine Fähigkeiten" });
    }, 1200);
  }

  render() {
    return (
      <div className="about">
        <div className="aboutMain">
          <div className="profile">
            <img className="image" src={"/img/profile1.png"} alt="profile" />
            <div className="mail-adress">
              <div className="email">
                <img className="icon" src={"/icons/email.png"} alt="email" />
                <a href="mailto:marijanspajic92@gmail.com" className="href">
                  marijanspajic92@gmail.com
                </a>
              </div>
              <div className="adress">
                <img
                  className="icon"
                  src={"/icons/location.png"}
                  alt="location"
                />
                <a
                  href="https://www.google.com/maps/place/Karlsruhe/@49.0158278,8.3393227,12z/data=!3m1!4b1!4m5!3m4!1s0x47970648a2e07809:0xb6fc55734cb7ee7f!8m2!3d49.0068901!4d8.4036527"
                  className="href"
                >
                  Karlsruhe, Germany
                </a>
              </div>
            </div>
          </div>
          <div className="aboutText">
            <h1>Hallo!</h1>
            <h1>Mein Name ist Marijan Spajić</h1>
            <h3>
              Ich bin Web Application Developer und UX/UI Designer. Zurzeit lebe
              ich in Karlsruhe. Begeistert und engagiert programmiere und
              gestalte ich Web Anwendungen - angefangen beim Design, über
              Frontend bis Backend. Meine Interessen liegen in den neusten
              Technologien, der Web-Entwicklung und in der allgemeinen
              Informatik.
            </h3>
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
              src={"/icons/postgreSQL.png"}
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
