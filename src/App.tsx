import "./App.css";
import Input from "./components/UI/Input";
import { useRef } from "react";
import Button from "./components/UI/Button";
import NavBar from "./components/layout/navBar/NavBar";
import Board from "./components/layout/gameBoard/Board";

function App() {
  const refNick = useRef<HTMLInputElement>();
  const first = () => {
    console.log("xxddd");
  };
  return (
    <div className="App">
      <NavBar
        menuElements={["Play Game!", "Score Board", "Create new words set"]}
      />
      <Input
        ref={refNick}
        label={"Nick: "}
        input={{
          type: "text",
          id: "nickName",
          required: true,
          minLength: 3,
          placeholder: "Enter your nickname here...",
        }}
      />
      <Button onClickHandler={first}>TEST</Button>
      <Board />
    </div>
  );
}

export default App;
