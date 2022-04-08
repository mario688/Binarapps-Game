import { useState } from "react";
import Style from "./SingleWord.module.scss";
const SingleWord: React.FC<{
  onCheckWord: (word: string) => boolean;
  word: string;
}> = (props) => {
  const { onCheckWord } = props;
  const [isSelected, setIsSelected] = useState(false);

  const onClickHandler = (e: any) => {
    setIsSelected((prevState) => !prevState);
    console.log(onCheckWord(e.target.textContent));
  };

  return (
    <>
      {isSelected.toString()}
      <div className={Style.singleWord} onClick={onClickHandler}>
        {props.word}
      </div>
    </>
  );
};
export default SingleWord;
