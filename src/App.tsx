import "./App.scss";
import Modal from "./components/UI/modal/Modal";
import NavBar from "./components/layout/navBar/NavBar";
import Board from "./components/layout/gameBoard/Board";
import Card from "./components/layout/card/Card";
import Register from "./components/layout/registration/Register";
import NicknameContext from "./context/RegisterNicknameContext";
import { gameActions } from "./store/game";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/UI/Button";
function App() {
  const { isRegistered, nickName } = useContext(NicknameContext);
  const [showScore, setShowScore] = useState(false);
  const score = useSelector((state: any) => state.score);
  const dispatch = useDispatch();
  const finishGameHandler = () => {
    dispatch(gameActions.countScore());
    setShowScore((prev) => !prev);
  };

  return (
    <div className="App">
      {showScore && (
        <Modal
          title="SCORE"
          message={`Congratulations, ${nickName}!\n Your score: \n ${score}`}
        />
      )}
      <NavBar
        menuElements={[
          "Play Game!",
          "Score Board",
          "Create new words set",
          nickName,
        ]}
      />
      <Card>
        {!isRegistered && <Register />}
        {isRegistered && <Board />}
        {isRegistered && (
          <Button onClickHandler={finishGameHandler}>finish game</Button>
        )}
      </Card>
    </div>
  );
}

export default App;
