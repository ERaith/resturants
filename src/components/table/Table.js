import { TableBody } from './TableBody';
import { TableHeader } from "./TableHeader";

export function Table({ tableData, headerMeta }) {
  const headerOrder = headerMeta.map((m) => m.key);
  return (
    <table className="container" id="resturants">
      <tbody>
        <TableHeader headers={headerMeta} />
        <TableBody data={tableData} headerOrder={headerOrder} />
      </tbody>
    </table>
  );
}
