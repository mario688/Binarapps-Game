import useRequest from "../../hook/use-http";
import WordsList from "./WordsList";
const CateegoryList = () => {
  const response = useRequest(
    "https://sturdy-dragon-299320-default-rtdb.firebaseio.com/wordslist.json"
  );
  const categoryList: any = response.dataResp;
  const wordslist = [];
  for (let key in categoryList) {
    wordslist.push(<WordsList key={key} category={categoryList[key]} />);
  }

  return <>{wordslist}</>;
};
export default CateegoryList;
