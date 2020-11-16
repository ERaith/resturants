import React, { useState } from "react";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
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
    </form>
  );
}
