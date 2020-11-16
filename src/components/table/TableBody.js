import { TableCell } from "./TableCell";

export function TableBody({ data, headerOrder }) {
  return (
    <>
      {data.map((row) => (
        <tr key={`${row.id}`} className="table-row">
          {headerOrder.map((header) => {
            return (
              <TableCell data={row[header]} key={`${row.id}-${row[header]}`} />
            );
          })}
        </tr>
      ))}
    </>
  );
}
