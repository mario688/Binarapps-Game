import "./App.css";
import Input from "./components/UI/Input";
import { useRef } from "react";
import Button from "./components/UI/Button";
function App() {
  const refNick = useRef<HTMLInputElement>();
  const first = () => {
    console.log("xxddd");
  };
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
