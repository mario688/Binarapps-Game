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
    <SingleWord
      key={element}
      word={element}
      isCorrect={good_words.includes(element)}
    />
  ));

  //   25
  // longC = 25/2 = 12
  // shorC =25-12=13/2 =6
  // rest = 25 - 12 - 6*2 = 25-12-12=1;

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
        <div className={`${Style.firstLvlCloud} ${Style.cloud}`}>
          {cloud.firstLvl}
        </div>
        <div className={`${Style.secondLvlCloud} ${Style.cloud}`}>
          {cloud.secondLvl}
        </div>
        <div className={`${Style.thirdLvlCloud} ${Style.cloud}`}>
          {cloud.thirdLvl}
        </div>
      </div>
    </div>
  );
};
export default CategoryItem;
