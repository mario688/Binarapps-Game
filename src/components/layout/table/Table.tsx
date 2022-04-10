const Table: React.FC<{ heads: string[]; rows: any[][] }> = (props) => {
  const { heads, rows } = props;
  const theads = heads.map((el) => <th>{el}</th>);
  const tabledatas = rows.map((el) => <td>{el}</td>);
  return (
    <table>
      <tbody>
        <tr>{theads}</tr>
        <tr>{tabledatas}</tr>
      </tbody>
    </table>
  );
};
export default Table;
