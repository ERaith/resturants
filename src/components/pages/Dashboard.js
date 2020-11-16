import React, { useEffect, useState } from "react";

import { SearchBar } from '../searchBar/SearchBar';
import { Table } from "../table/Table";

function Dashboard({ data, headerMeta }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    setTableData(data);
  },[data]);

  useEffect(() => {
    const results = data.filter((resturant) => {
      const name = resturant.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return name
    });

    setTableData(results);
    
  }, [searchTerm])

  return (
    <div className="main">
      <div className="search-container">
        <SearchBar handleSearchChange={handleSearchChange} />
      </div>
      <div className="table-container">
        <Table tableData={tableData} headerMeta={headerMeta} />
      </div>
    </div>
  );
}

export default Dashboard;
