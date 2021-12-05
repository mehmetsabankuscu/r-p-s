import {
  rockImage,
  paperImage,
  scissorsImage,
} from "../Helpers/Images.helpers";

export const GameOverMessage = {
  playerWon: {
    message: "You Won. Congratulations. ",
  },
  computerWon: {
    message: "You Lost. Try again.",
  },
};

export const RoundChoices = [
  {
    name: "Rock",
    src: rockImage,
    alt: "rock",
    cursor: true
  },
  {
    name: "Paper",
    src: paperImage,
    alt: "paper",
    cursor: true
  },
  {
    name: "Scissors",
    src: scissorsImage,
    alt: "scissors",
    cursor: true
  },
];

