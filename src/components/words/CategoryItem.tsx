import SingleWord from "./SingleWord";
import Style from "./CategoryItem.module.scss";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/game";
interface Category {
  all_words: string[];
  good_words: string[];
  question: string;
}
const CategoryItem: React.FC<{ category: Category }> = (props) => {
  const dispatch = useDispatch();
  const { all_words, good_words, question } = props.category;
  dispatch(gameActions.setGoodWords(good_words));

  const singleWord = all_words.map((element) => (
    <SingleWord key={element} word={element} />
  ));

  return (
    <div className={Style.gameContent}>
      <div className={Style.question}>{question}</div>
      <div className={Style.wordsFlexContainer}> {singleWord}</div>
    </div>
  );
};
export default CategoryItem;
