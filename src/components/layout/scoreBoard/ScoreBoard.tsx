import Table from "../table/Table";
import Card from "../card/Card";
import useRequest from "../../../hook/use-http";
import Spinner from "../../UI/spinner/Spinner";
const ScoreBoard = () => {
  const { dataResp, isLoading } = useRequest(
    "https://sturdy-dragon-299320-default-rtdb.firebaseio.com/scoreslist.json"
  );

  const scoresList: any = dataResp;

  const playersList = [];

  for (let key in scoresList) {
    const singlePlayer = scoresList[key];
    const { nick, category, date, score } = singlePlayer;
    const convertedDate = date.slice(0, 10);
    playersList.push([nick, category, convertedDate, score]);
  }

  return (
    <Card>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          heads={["No.", "Nick", "Category", "Date", "Score"]}
          rows={playersList}
        />
      )}
    </Card>
  );
};

export default ScoreBoard;
