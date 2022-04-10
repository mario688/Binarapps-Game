import Table from "../table/Table";
const ScoreBoard = () => {
  return (
    <Table
      heads={["No.", "Nick", "Category", "Date", "Score"]}
      rows={[
        ["mario", "gliwa", "colors", "2022-04-10"],
        ["john", "doe", "animals", "2022-04-10"],
      ]}
    />
  );
};

export default ScoreBoard;
