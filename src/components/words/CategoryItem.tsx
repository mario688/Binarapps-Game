import SingleWord from "./SingleWord";
import Style from "./CategoryItem.module.scss";
interface Category {
  all_words: string[];
  good_words: string[];
  question: string;
}
const CategoryItem: React.FC<{ category: Category }> = (props) => {
  const { all_words, good_words, question } = props.category;

  const CheckWordHandler = (word: string) => {
    if (!good_words.includes(word)) {
      return false;
    }
    return true;
  };

  const singleWord = all_words.map((element) => (
    <SingleWord key={element} word={element} onCheckWord={CheckWordHandler} />
  ));

  return (
    <>
      <div className={Style.question}>{question}</div>
      <div className={Style.wordsFlexContainer}> {singleWord}</div>
    </>
  );
};
export default CategoryItem;
