import React, { useEffect, useState } from "react";

import { SearchBar } from "../searchBar/SearchBar";
import { SelectionFilter } from "../selectionFilter/SelectionFilter";
import { Table } from "../table/Table";
import { states } from "../../api/data";

function Dashboard({ data, headerMeta }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [stateFilterActive, setStateFilterActive] = useState(true);
  const [tableData, setTableData] = useState([]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleChange = (event) => {
    switch (event.target.id) {
      case "state selection":
        setStateFilter(event.target.value);
        break;
      case "state selection:isActive":
        setStateFilterActive(event.target.checked);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    const results = data.filter((resturant) => {
      const name = isPresent(resturant, "name", searchTerm);
      const city = isPresent(resturant, "city", searchTerm);
      const genre = isPresent(resturant, "genre", searchTerm);
      const search = name || city || genre;
      const state =
        stateFilterActive &&
        stateFilter !== "All" &&
        resturant.state.includes(stateFilter);
      return search && state;
    });

    setTableData(results);
  }, [searchTerm, data, stateFilter, stateFilterActive]);

  return (
    <div className="main">
      <div className="search-container">
        <SearchBar handleSearchChange={handleSearchChange} />
        <SelectionFilter
          dropDownItems={states}
          filterTermActive={stateFilterActive}
          handleChange={handleChange}
          id="state selection"
        />
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
