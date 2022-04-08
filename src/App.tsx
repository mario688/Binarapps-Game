import "./App.css";
import NavBar from "./components/layout/navBar/NavBar";
import Board from "./components/layout/gameBoard/Board";
import Register from "./components/layout/registration/Register";
function App() {
  const first = () => {
    console.log("xxddd");
  };
  return (
    <div className="App">
      <NavBar
        menuElements={["Play Game!", "Score Board", "Create new words set"]}
      />
      <Register />
      <Board />
    </div>
  );
}

export default App;
