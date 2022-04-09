import { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/game";
import Style from "./SingleWord.module.scss";

const SingleWord: React.FC<{
  word: string;
}> = (props) => {
  const { word } = props;
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = (e: any) => {
    setIsSelected((prevState) => !prevState);
    !isSelected
      ? dispatch(gameActions.selectWord(word))
      : dispatch(gameActions.deselectWord(word));

    dispatch(gameActions.countScore());
  };

  return (
    <>
      <div
        className={`${Style.singleWord} ${isSelected && Style.selected}`}
        onClick={onClickHandler}
      >
        {word}
      </div>
    </>
  );
};
export default SingleWord;
