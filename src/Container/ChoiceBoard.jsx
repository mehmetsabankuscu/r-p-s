import {
  addHistory,
  scoreBoard,
  currentComputer,
  setCurrentComputerChoice,
} from "../redux/historySlice";
import {
  defaultComputer,
  paperImage,
  rockImage,
  scissorsImage,
} from "../Utils/Helpers/Images.helpers";

import { useDispatch, useSelector } from "react-redux";
import { RoundChoices } from "../Utils/Constants/Constants";
import RoundSelection from "../components/RoundSelection";

const ChoiceBoard = () => {
  const dispatch = useDispatch();

  const choiceList = ["Rock", "Paper", "Scissors"];
  const currentComputerChoice = useSelector(currentComputer);

  const winner = (playerChoice, computerChoice) => {
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
      return "Player";
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
      return "Computer";
    } else if (playerChoice === "Rock" && computerChoice === "Rock") {
      return "Draw";
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      return "Player";
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
      return "Computer";
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
      return "Draw";
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
      return "Computer";
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      return "Player";
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
      return "Draw";
    }
  };

  const game = (playerChoice) => {
    const computerChoice = choiceList[Math.floor(Math.random() * 3)];
    const roundWinner = winner(playerChoice, computerChoice);
    dispatch(setCurrentComputerChoice(computerChoice));
    winner(playerChoice, computerChoice) === "Player"
      ? dispatch(scoreBoard(1))
      : winner(playerChoice, computerChoice) === "Computer"
      ? dispatch(scoreBoard(-1))
      : dispatch(scoreBoard(0));
    dispatch(addHistory({ playerChoice, computerChoice, roundWinner }));
  };

  const computerImg =
    currentComputerChoice === "Rock"
      ? rockImage
      : currentComputerChoice === "Paper"
      ? paperImage
      : currentComputerChoice === "Scissors"
      ? scissorsImage
      : defaultComputer;

  return (
    <div className="choice-board">
      <div className="choice-board__container">
        <p className="choice-board__player">Player</p>
        <div className="choice-board__images">
          {RoundChoices.map((choice) => {
            const { name, src, alt, cursor } = choice;
            return (
              <RoundSelection
                cursor={cursor}
                src={src}
                alt={alt}
                name={name}
                gameFunc={game}
                onClick={true}
              />
            );
          })}
        </div>

        <p className="choice-board__computer">Computer</p>
        <div className="choice-board__computer-choice">
          <RoundSelection src={computerImg} />
        </div>
      </div>
    </div>
  );
};
export default ChoiceBoard;
