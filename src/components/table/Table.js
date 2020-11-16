export function Table({ tableData, headerMeta }) {
  const headerOrder = headerMeta.map((m) => m.key);
  return (
    <table className="container" id="resturants">
      <tbody>
        <tr className="table-row">
          {headerMeta.map((d) => (
            <th key={d.key}>{d.text}</th>
          ))}
        </tr>
        <>
          {tableData.map((row) => (
            <tr key={`${row.id}`} className="table-row">
              {headerOrder.map((header) => {
                return <td className="table-cell">{row[header]}</td>;
              })}
            </tr>
          ))}
        </>
      </tbody>
    </table>
  );
}
