import useRequest from "../../hook/use-http";

const WordsList = () => {
  const resp = useRequest(
    "https://sturdy-dragon-299320-default-rtdb.firebaseio.com/wordslist.json",
    "POST",
    { test: "xd", nym: 3 }
  );
  return <>xdd</>;
};
export default WordsList;
