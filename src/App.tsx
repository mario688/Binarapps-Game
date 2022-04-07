import "./App.css";
import Input from "./components/UI/Input";
import React, { useRef } from "react";
function App() {
  const refNick = useRef<HTMLInputElement>();

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
    </div>
  );
}

export default App;
