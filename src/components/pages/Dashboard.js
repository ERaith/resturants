import { Table } from "../table/Table";

function Dashboard({ data, headerMeta }) {
  return (
    <div className="main">
      <div className="table-container">
        <Table tableData={data} headerMeta={headerMeta}/>
      </div>
    </div>
  );
}

export default Dashboard;
