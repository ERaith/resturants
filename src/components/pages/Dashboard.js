import React, { useEffect, useState } from "react";

import { SearchBar } from "../searchBar/SearchBar";
import { Table } from "../table/Table";

function Dashboard({ data, headerMeta }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    const results = data.filter((resturant) => {
      const name = isPresent(resturant,'name',searchTerm)
      const city = isPresent(resturant,'city',searchTerm)
      const genre = isPresent(resturant,'genre',searchTerm)

      return name || city || genre;
    });

    setTableData(results);
  }, [searchTerm]);

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

export function isPresent(data, key, searchTerm) {
  return data[key].toLowerCase().includes(searchTerm.toLowerCase());
}
