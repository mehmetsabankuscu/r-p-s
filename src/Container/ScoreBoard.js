import React from "react";
import { useSelector } from "react-redux";
import { score } from "../redux/historySlice";

function ScoreBoard() {
  const scoreBoard = useSelector(score);

  return (
    <div className="score-board">
      <div className="score-board__container">
        <div className="score-board__title">
            <span className="score-board__span">Rock</span>
            <span className="score-board__span">Paper</span>
            <span className="score-board__span">Scissors</span>
        </div>
        <div className="score-board__score">
          <h2 className="score-board__score-title">Score</h2>
          <div className="score-board__score-point">{scoreBoard}</div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
