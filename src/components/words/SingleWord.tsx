import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../store/game";
import Style from "./SingleWord.module.scss";

const SingleWord: React.FC<{
  word: string;
  isCorrect: boolean;
}> = (props) => {
  const { word, isCorrect } = props;
  const [isSelected, setIsSelected] = useState(false);
  const showAnswers = useSelector((state: any) => state.showAnswers);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (showAnswers) {
      return;
    }
    setIsSelected((prevState) => !prevState);
    !isSelected
      ? dispatch(gameActions.selectWord(word))
      : dispatch(gameActions.deselectWord(word));
  };
  const answer = isCorrect ? "Good" : "Bad";
  return (
    <>
      <div
        className={`${Style.singleWord} ${isSelected && Style.selected}`}
        onClick={onClickHandler}
      >
        <div className={Style[answer]}>
          {isSelected && showAnswers ? answer : " "}
        </div>

        <div className={Style.word}>{word}</div>
      </div>
    </>
  );
};
export default SingleWord;
