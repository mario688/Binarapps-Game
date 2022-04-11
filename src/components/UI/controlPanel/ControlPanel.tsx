import { useState, useContext } from "react";
import { gameActions } from "../../../store/game";
import { useDispatch, useSelector } from "react-redux";
import NicknameContext from "../../../context/RegisterNicknameContext";
import Modal from "../modal/Modal";
import Button from "../Button";
const ControlPanel = () => {
  const [showScore, setShowScore] = useState(false);
  const dispatch = useDispatch();
  const { nickName } = useContext(NicknameContext);
  const showAnswers = useSelector((state: any) => state.showAnswers);
  const score = useSelector((state: any) => state.score);

  const finishGameHandler = () => {
    dispatch(gameActions.countScore());
    showScoreHandler();
  };
  const checkAnswersHandler = () => {
    dispatch(gameActions.checkAnswers());
  };
  const showScoreHandler = () => {
    setShowScore((prevState) => !prevState);
  };

  return (
    <div>
      {showScore && (
        <Modal
          onClickHandler={showScoreHandler}
          title={"Score"}
          message={`Congratulations, ${nickName}\nYour score:\n${score}`}
        />
      )}
      {showAnswers && (
        <Button onClickHandler={finishGameHandler}>finish game</Button>
      )}
      {!showAnswers && (
        <Button onClickHandler={checkAnswersHandler}>check answers</Button>
      )}
    </div>
  );
};
export default ControlPanel;
