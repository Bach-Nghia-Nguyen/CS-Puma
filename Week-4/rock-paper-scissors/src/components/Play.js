import React from "react";
import { Link } from "react-router-dom";

import Triangle from "../images/bg-triangle.svg";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  (function (data) {
    console.log(data);
  })("Let me through"); // IIFE

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />

      <div className="items">
        <Link to="/game">
          <div
            className="icon icon--paper"
            onClick={setChoice}
            data-id="paper"
          ></div>
        </Link>

        <Link to="/game">
          <div
            className="icon icon--scissors"
            onClick={setChoice}
            data-id="scissors"
          ></div>
        </Link>

        <Link to="/game">
          <div
            className="icon icon--rock"
            onClick={setChoice}
            data-id="rock"
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
