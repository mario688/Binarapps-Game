import Style from "./NewWord.module.scss";
import { useState } from "react";
const NewWord: React.FC<{ onClickFunction: any }> = (props) => {
  const [isGood, setIsGood] = useState(false);
  const goodWordHandler = () => {
    props.onClickFunction(props.children);
    setIsGood((prev) => !prev);
  };
  return (
    <div
      onClick={goodWordHandler}
      className={`${Style.word} ${isGood && Style.good}`}
    >
      {props.children}
    </div>
  );
};

export default NewWord;
