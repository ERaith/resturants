import { TableHeader } from "./TableHeader";

export function Table({ tableData, headerMeta }) {
  const headerOrder = headerMeta.map((m) => m.key);
  return (
    <table className="container" id="resturants">
      <tbody>
        <TableHeader headers={headerMeta} />
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
