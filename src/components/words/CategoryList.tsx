import useRequest from "../../hook/use-http";
import CategoryItem from "./CategoryItem";
const CategoryList = () => {
  const response = useRequest(
    "https://sturdy-dragon-299320-default-rtdb.firebaseio.com/wordslist.json"
  );

  const categoryList: any = response.dataResp;
  const wordslist = [];
  for (let key in categoryList) {
    wordslist.push(<CategoryItem key={key} category={categoryList[key]} />);
  }

  //word set draw
  const currentWordsSet =
    wordslist[Math.floor(Math.random() * wordslist.length)];

  return <>{currentWordsSet}</>;
};
export default CategoryList;
