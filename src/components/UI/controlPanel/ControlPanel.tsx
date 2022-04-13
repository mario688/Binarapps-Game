import { useState, useContext } from "react";
import useRequest from "../../../hook/use-http";
import { useNavigate } from "react-router";
import { gameActions } from "../../../store/game";
import { useDispatch, useSelector } from "react-redux";
import NicknameContext from "../../../context/RegisterNicknameContext";
import Modal from "../modal/Modal";
import Button from "../Button";
const ControlPanel = () => {
  const navigate = useNavigate();
  const { isLoading, dataResp, sendRequest } = useRequest();
  const [gameFinished, setGameFinished] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const dispatch = useDispatch();
  const { nickName } = useContext(NicknameContext);
  const showAnswers = useSelector((state: any) => state.showAnswers);
  const score = useSelector((state: any) => state.score);

  const questionCategory = useSelector(
    (state: any) => state.gameProp.questionCategory
  );

  const finishGameHandler = () => {
    showScoreHandler();
    const url =
      "https://sturdy-dragon-299320-default-rtdb.firebaseio.com/scoreslist.json";
    sendRequest(url, "POST", {
      category: questionCategory,
      nick: nickName,
      date: new Date().toISOString(),
      score: score,
    });
    setGameFinished(true);
  };
  const checkAnswersHandler = () => {
    dispatch(gameActions.checkAnswers());
    dispatch(gameActions.countScore());
  };
  const showScoreHandler = () => {
    setShowScore((prevState) => !prevState);
  };
  const newGameHandler = () => {
    dispatch(gameActions.resetGame());
    navigate("/");
  };
  return (
    <div>
      {showScore && (
        <Modal
          onClickHandler={showScoreHandler}
          title={"Score"}
          message={`Congratulations, ${nickName} ! Your score: ${score}`}
        />
      )}
      {showAnswers && !gameFinished && (
        <Button onClickHandler={finishGameHandler}>finish game</Button>
      )}
      {!showAnswers && (
        <Button onClickHandler={checkAnswersHandler}>check answers</Button>
      )}
      {gameFinished && <Button onClickHandler={newGameHandler}>Exit</Button>}
    </div>
  );
};
export default ControlPanel;
