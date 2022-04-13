import "./App.scss";
import NavBar from "./components/layout/navBar/NavBar";
import Board from "./components/layout/gameBoard/Board";
import { Routes, Route } from "react-router-dom";
import Card from "./components/layout/card/Card";
import Register from "./components/layout/registration/Register";
import NicknameContext from "./context/RegisterNicknameContext";
import { useContext } from "react";
import { Navigate } from "react-router";
import ScoreBoard from "./components/layout/scoreBoard/ScoreBoard";
import HomePage from "./pages/HomePage";
import ControlPanel from "./components/UI/controlPanel/ControlPanel";
import CreateQuestionPage from "./pages/CreateQuestionPage";

function App() {
  const { isRegistered, nickName } = useContext(NicknameContext);

  return (
    <div className="App">
      <NavBar
        menuElements={[
          "Play Game!",
          "Score Board",
          "Create new words set",
          nickName,
        ]}
        menuLinks={["play", "score", "addnewset", "register"]}
      />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route
          path={"/addnewset"}
          element={
            <Card>
              <CreateQuestionPage />
            </Card>
          }
        />

        <Route
          path="/play"
          element={
            <Card>
              <>
                {!isRegistered && <Register />}
                {isRegistered ? <Board /> : <Navigate to="/register" />}
                {isRegistered && <ControlPanel />}
              </>
            </Card>
          }
        />
        <Route path="/score" element={<ScoreBoard />} />

        <Route
          path={"/register"}
          element={
            <Card>
              <Register />
            </Card>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
