import Style from "./Board.module.scss";
import CategoryList from "../../words/CategoryList";
const Board = () => {
  return (
    <div className={Style.boardContainer}>
      <CategoryList />
    </div>
  );
};

export default Board;
