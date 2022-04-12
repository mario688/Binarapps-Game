import Style from "./NewWord.module.scss";
import { useState } from "react";
const NewWord: React.FC = (props) => {
  const [isGood, setIsGood] = useState(false);
  const goodWordHandler = () => {
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
