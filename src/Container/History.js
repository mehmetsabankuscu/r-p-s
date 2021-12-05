import { useSelector } from "react-redux";
import { history } from "../redux/historySlice";
import { useState } from "react";
import { GiDreadSkull } from "react-icons/gi";
import { IoMdTrophy } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

function History() {
  const historyList = useSelector(history);
  const [showHistory, setShowHistory] = useState(true);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="history">
      <div className="history__title" onClick={toggleHistory}>
        History
      </div>
      <div
        className={`history__container ${
          showHistory ? "history__container--toggle" : ""
        }`}
      >
        {historyList.map((history, key) => (
          <div
            className={`history__container-round history__container--${history.roundWinner.toLowerCase()}`}
            key={key}
          >
            <p>
              <span> {history.playerChoice}</span>
              <span>VS</span>
              <span> {history.computerChoice}</span>
              {history.roundWinner === "Player" ? (
                <IoMdTrophy  className="history__result-icon"/>
              ) : history.roundWinner === "Computer" ? (
                <GiDreadSkull className="history__result-icon"/>
              ) : history.roundWinner === "Computer" ? (
                history.roundWinner === "Draw"
              ) : (
                <FaHandshake className="history__result-icon"/>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
