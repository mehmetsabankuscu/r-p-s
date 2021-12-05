import React from "react";
import ScoreBoard from "./ScoreBoard";
import "./styles.css";
import GameBoard from "./GameBoard";
import GameOverModal from "./GameOverModal";

const Game = () => {

  return (
    <div className="game">
      <GameOverModal /> 
      <ScoreBoard />
      <GameBoard />
    </div>
  );
};

export default Game;
