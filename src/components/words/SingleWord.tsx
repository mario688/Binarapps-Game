import Style from "./SingleWord.module.scss";
const SingleWord: React.FC<{
  onCheckWord: (word: string) => void;
  word: string;
}> = (props) => {
  const { onCheckWord } = props;

  const onClickHandler = (e: any) => {
    onCheckWord(e.target.textContent);
  };

  return (
    <div className={Style.singleWord} onClick={onClickHandler}>
      {props.word}
    </div>
  );
};
export default SingleWord;
