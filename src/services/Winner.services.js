import { useSelector, useDispatch } from "react-redux";
import { score, setWinner } from "../redux/historySlice";

const WinnerService = () => {
  const scoreBoard = useSelector(score);
  const dispatch = useDispatch();

  const winner = () => {
    if (scoreBoard === 3) {
      dispatch(setWinner("Player"));
    } else if (scoreBoard === -3) {
      dispatch(setWinner("Computer"));
    }
  };

  winner();
};

export default WinnerService;
