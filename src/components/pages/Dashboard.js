import React, { useEffect, useState } from "react";

import { Paginator } from "../paginator/Paginator";
import { SearchBar } from "../searchBar/SearchBar";
import { SelectionFilter } from "../selectionFilter/SelectionFilter";
import { Table } from "../table/Table";
import { states } from "../../api/data";

const pageSize = 10;

function Dashboard({ data, headerMeta, genreFilterKeys }) {
  const [genreFilter, setGenreFilter] = useState("");
  const [genreFilterActive, setGenreFilterActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [stateFilterActive, setStateFilterActive] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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
      case "genre selection":
        setGenreFilter(event.target.value);
        break;

      case "genre selection:isActive":
        setGenreFilterActive(event.target.checked);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Reset data when fetch updates
    setTableData(data);
  }, [data]);

  useEffect(() => {
    // Filter Results
    const results = data.filter((resturant) => {
      const name = isPresent(resturant, "name", searchTerm);
      const city = isPresent(resturant, "city", searchTerm);
      const genre = isPresent(resturant, "genre", searchTerm);
      const search = name || city || genre;

      const statePresent =
        stateFilterActive &&
        stateFilter !== "All" &&
        !resturant.state.includes(stateFilter);

      const genrePresent =
        genreFilterActive &&
        genreFilter !== "All" &&
        !resturant.genre.includes(genreFilter);

      return search && !statePresent && !genrePresent;
    });

    setCurrentPage(0);
    setTableData(results);
  }, [
    data,
    genreFilter,
    genreFilterActive,
    searchTerm,
    stateFilter,
    stateFilterActive,
  ]);

  useEffect(() => {
    // paginate
    const startPointer = currentPage * pageSize;
    const endPointer = startPointer + pageSize;
    setPaginatedData(tableData.slice(startPointer, endPointer));
  }, [currentPage, tableData]);

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
        <SelectionFilter
          dropDownItems={genreFilterKeys}
          filterTermActive={genreFilterActive}
          handleChange={handleChange}
          id="genre selection"
        />
      </div>
      <div className="table-container">
        {tableData === [] ? (
          <Table tableData={paginatedData} headerMeta={headerMeta} />
        ) : (
          "Nothing to See here"
        )}
      </div>
      <Paginator
        setPage={setCurrentPage}
        size={Math.ceil(tableData.length / pageSize)}
        page={currentPage}
      />
    </div>
  );
}

export default Dashboard;

export function isPresent(data, key, searchTerm) {
  return data[key].toLowerCase().includes(searchTerm.toLowerCase());
}
