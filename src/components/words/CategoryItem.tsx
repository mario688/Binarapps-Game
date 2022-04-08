import SingleWord from "./SingleWord";

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
      <h1>{question}</h1>
      {singleWord}
    </>
  );
};
export default CategoryItem;
