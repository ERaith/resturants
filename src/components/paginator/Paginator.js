export function Paginator({ size, setPage, page }) {
  return (
    <div className="paginator">
      {Array(size)
        .fill(0)
        .map((_, i) => {
          let active = i === page ? "active" : "";
          return (
            <button
              className={`paginator-block ${active}`}
              id={`page-${i}`}
              key={i}
              onClick={() => setPage(i)}
            >
              {i}
            </button>
          );
        })}
    </div>
  );
}
