export function SelectionFilter({
  dropDownItems,
  filterTermActive,
  handleChange,
  id,
}) {
  return (
    <div className="filter-container">
      <label htmlFor={id}> {id.toUpperCase()} </label>
      <select key={id} onChange={handleChange} id={id} className="filter">
        <option key={`Default-Option:${id}`} defaultValue>
          All
        </option>
        {dropDownItems.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
      <input
        checked={filterTermActive}
        className="checkbox"
        id={`${id}:isActive`}
        onChange={handleChange}
        type="checkbox"
      ></input>
    </div>
  );
}
