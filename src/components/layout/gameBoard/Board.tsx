import Style from "./Board.module.scss";
import WordsList from "../../words/WordsList";
const Board = () => {
  return (
    <div className={Style.boardContainer}>
      <WordsList />
    </div>
  );
};

export default Board;
