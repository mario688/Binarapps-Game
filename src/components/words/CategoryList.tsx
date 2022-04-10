import useRequest from "../../hook/use-http";
import Spinner from "../UI/spinner/Spinner";
import CategoryItem from "./CategoryItem";
const CategoryList = () => {
  const { dataResp, isLoading } = useRequest(
    "https://sturdy-dragon-299320-default-rtdb.firebaseio.com/wordslist.json"
  );

  const categoryList: any = dataResp;
  const wordslist = [];
  for (let key in categoryList) {
    wordslist.push(<CategoryItem key={key} category={categoryList[key]} />);
  }

  //word set draw
  const currentWordsSet =
    wordslist[Math.floor(Math.random() * wordslist.length)];

  return <>{isLoading ? <Spinner /> : currentWordsSet}</>;
};
export default CategoryList;
