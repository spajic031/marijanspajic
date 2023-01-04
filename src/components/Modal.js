import React, { useState } from "react";
import "./Portfolio.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  /*   const blabla = () => {
    document.body.classList.remove("active-modal");
  }; */
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button className="btn-modal window" onClick={toggleModal}></button>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <img
                src={require("./icons/close.png")}
                alt="close-button"
                className="close-modal"
                onClick={toggleModal}
              ></img>
              <h1>{props.header}</h1>
              <img
                className="img-modal"
                src={require("./images/" + props.img)}
                alt="design"
              />
              <p className="modal-text">{props.text}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = props.web;
                }}
                className={props.class1}
              >
                {props.btnWeb}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = props.git;
                }}
                className={props.class2}
              >
                {props.btnGit}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
