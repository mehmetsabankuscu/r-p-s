import ChoiceBoard from "./ChoiceBoard";
import History from "./History";

const GameBoard = () => {
  return (
    <div className="game-board container">
      <ChoiceBoard />
      <History />
    </div>
  );
};

export default GameBoard;
