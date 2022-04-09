import "./App.css";
import NavBar from "./components/layout/navBar/NavBar";
import Board from "./components/layout/gameBoard/Board";
import Register from "./components/layout/registration/Register";
import NicknameContext from "./context/RegisterNicknameContext";
import { useContext } from "react";
import Button from "./components/UI/Button";
function App() {
  const { isRegistered, nickName } = useContext(NicknameContext);

  const finishGameHandler = () => {};
  return (
    <div className="App">
      <NavBar
        menuElements={[
          "Play Game!",
          "Score Board",
          "Create new words set",
          nickName,
        ]}
      />
      {!isRegistered && <Register />}
      {isRegistered && <Board />}
      {isRegistered && (
        <Button onClickHandler={finishGameHandler}>finish game</Button>
      )}
    </div>
  );
}

export default App;
