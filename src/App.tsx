import "./App.css";
import NavBar from "./components/layout/navBar/NavBar";
import Board from "./components/layout/gameBoard/Board";
import Register from "./components/layout/registration/Register";
import NicknameContext from "./context/RegisterNicknameContext";
import { useContext } from "react";
function App() {
  const { isRegistered } = useContext(NicknameContext);
  return (
    <div className="App">
      <NavBar
        menuElements={["Play Game!", "Score Board", "Create new words set"]}
      />
      {!isRegistered && <Register />}
      {isRegistered && <Board />}
    </div>
  );
}

export default App;
