import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../store/game";
import Style from "./SingleWord.module.scss";

const SingleWord: React.FC<{
  onCheckWord: (word: string) => boolean;
  word: string;
}> = (props) => {
  const { onCheckWord, word } = props;
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const onClickHandler = (e: any) => {
    setIsSelected((prevState) => !prevState);
    !isSelected
      ? dispatch(gameActions.selectWord(word))
      : dispatch(gameActions.deselectWord(word));
  };
  console.log(selector);
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
