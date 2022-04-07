import SingleWord from "./SingleWord";

interface Category {
  all_words: string[];
  good_words: string[];
  questions: string;
}
const CategoryItem: React.FC<{ category: Category }> = (props) => {
  const { all_words, good_words, questions } = props.category;

  const singleWord = all_words.map((element) => (
    <SingleWord key={element} word={element} />
  ));

  return <>{singleWord}</>;
};
export default CategoryItem;
