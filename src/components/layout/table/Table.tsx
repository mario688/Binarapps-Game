import Style from "./Table.module.scss";
const Table: React.FC<{ heads: string[]; rows: any[][] }> = (props) => {
  const { heads, rows } = props;
  const theads = heads.map((el, id) => <th key={id}>{el}</th>);
  const tabledatas = rows.map((tdata, id) => (
    <tr key={id}>
      <td> {id}</td>
      {tdata.map((trow) => (
        <td key={Math.random().toString()}> {trow}</td>
      ))}
    </tr>
  ));
  return (
    <table className={Style.table}>
      <tbody>
        <tr>{theads}</tr>
        {tabledatas}
      </tbody>
    </table>
  );
};
export default Table;
