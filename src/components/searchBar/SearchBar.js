import React, { useState } from "react";

export function SearchBar({ handleSearchChange }) {
  const [searchValue, setSearchValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    handleSearchChange(searchValue);
  };
  const clear = () => {
    setSearchValue("");
    handleSearchChange("");
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="search"> SEARCH </label>
      <input
        className="search"
        id="search"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        type="text"
        value={searchValue}
      />
      <button type="submit" value="Submit" className="submit-search">
        Submit
      </button>
      <button type="reset" className="clear-search" onClick={clear}>
        Clear Search
      </button>
    </form>
  );
}
