
export function TableHeader({ headers }) {

  return (
    <tr className="table-row">
      {
        headers.map((d) => <th key={d.key}>{d.text}</th>)
      }
    </tr>
  )
}
