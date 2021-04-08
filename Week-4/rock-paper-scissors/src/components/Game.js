import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ myChoice, score, setScore }) => {
  const [computer, setComputer] = useState("");
  const [playerResult, setPlayerResult] = useState("");

  const [counter, setCounter] = useState(3);

  const newComputerPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setComputer(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newComputerPick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && computer === "scissors") {
      setPlayerResult("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && computer === "paper") {
      setPlayerResult("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && computer === "paper") {
      setPlayerResult("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && computer === "rock") {
      setPlayerResult("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && computer === "rock") {
      setPlayerResult("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && computer === "scissors") {
      setPlayerResult("lose");
      setScore(score - 1);
    } else {
      setPlayerResult("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, computer]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerResult == "win" ? `icon icon--${myChoice}--winner` : ""
          } `}
        ></div>
      </div>

      {playerResult === "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setComputer()}>
            {" "}
            Play again
          </Link>
        </div>
      )}

      {playerResult === "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setComputer()}>
            {" "}
            Play again
          </Link>
        </div>
      )}

      {playerResult === "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setComputer()}>
            {" "}
            Play again
          </Link>
        </div>
      )}

      <div className="game__computer">
        <span className="text">Computer picked</span>
        {counter == 0 ? (
          <div
            className={`icon icon--${computer} ${
              playerResult == "lose" ? `icon icon--${computer}--winner` : ""
            } `}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;

// My choice: {myChoice} <br />
//       Computer choice: {computer} <br />
//       Result:
//       {playerResult === "win" && <h2>You Win</h2>}
//       {playerResult === "lose" && <h2>You Lose</h2>}
//       {playerResult === "draw" && <h2>Draw</h2>}
//       <Link to="/" onClick={() => setComputer()}>
//         Play again
//       </Link>
