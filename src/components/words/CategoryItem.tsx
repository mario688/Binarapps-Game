import SingleWord from "./SingleWord";
import Style from "./CategoryItem.module.scss";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/game";
interface Category {
  all_words: string[];
  good_words: string[];
  question: string;
  category: string;
}
const CategoryItem: React.FC<{ singleCategory: Category }> = (props) => {
  const dispatch = useDispatch();
  const { all_words, good_words, question, category } = props.singleCategory;

  dispatch(gameActions.setGameProp({ good_words, category }));

  const singleWord = all_words.map((element) => (
    <SingleWord
      key={element}
      word={element}
      isCorrect={good_words.includes(element)}
    />
  ));

  const makeCloud = (elements: any) => {
    const longCloud = singleWord.length / 2;
    const shortCloud = (singleWord.length - longCloud) / 2;
    const rest = singleWord.length - longCloud - shortCloud * 2;
    const endOfLongCloud = shortCloud + longCloud + rest;
    return {
      firstLvl: elements.slice(0, shortCloud),
      secondLvl: elements.slice(shortCloud, endOfLongCloud),
      thirdLvl: elements.slice(endOfLongCloud, endOfLongCloud + shortCloud),
    };
  };

  const cloud = makeCloud(singleWord);

  return (
    <div className={Style.gameContent}>
      <div className={Style.question}>{question}</div>
      <div className={Style.cloudContainer}>
        <div className={Style.miniCloud}></div>
        <div className={`${Style.firstLvlCloud} ${Style.cloud}`}>
          {cloud.firstLvl}
        </div>

        <div className={`${Style.secondLvlCloud} ${Style.cloud}`}>
          {cloud.secondLvl}
        </div>
        <div className={`${Style.thirdLvlCloud} ${Style.cloud}`}>
          {cloud.thirdLvl}
        </div>
        <div className={`${Style.miniCloud} ${Style.endCloud}`}></div>
      </div>
    </div>
  );
};
export default CategoryItem;
