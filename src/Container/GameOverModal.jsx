import { useState, useEffect, useRef } from "react";
import WinnerService from "../services/Winner.services";
import { resetGame, winner } from "../redux/historySlice";
import { useSelector, useDispatch } from "react-redux";
import { RiCloseCircleLine } from "react-icons/ri";
import { GameOverMessage } from "../Utils/Constants/Constants";

const GameOverModal = () => {
  const [showModal, setShowModal] = useState(false);
  const gameWinner = useSelector(winner);
  const dispatch = useDispatch();
  const didMountRef = useRef(false);
  const { playerWon, computerWon } = GameOverMessage;

  WinnerService();

  useEffect(() => {
    if (didMountRef.current) {
      setShowModal(true);
    } else {
      didMountRef.current = true;
    }
  }, [dispatch, gameWinner]);

  const closeModal = () => {
    dispatch(resetGame());
    setShowModal(false);
    didMountRef.current = false;
  }



  return (
    <div
      className={`game-over-modal ${showModal ? "game-over-modal--show" : ""}`}
    >
      <div className="game-over-modal__container">
        <RiCloseCircleLine className="game-over-modal__icon" onClick={closeModal}/>
        <div className="game-over-modal__inner">
          <div className="game-over-modal__title">Game Over</div>
          <div className="game-over-modal__message">
            {gameWinner === "Player" ? playerWon.message : computerWon.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
