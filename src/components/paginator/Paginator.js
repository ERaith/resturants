export function Paginator({size }) {
  return (
    <div className="paginator">
      {Array(size)
        .fill(0)
        .map((_, i) => {
          return (
            <button
              className={`paginator-block`}
              id={`page-${i}`}
              key={i}
            >
              {i}
            </button>
          );
        })}
    </div>
  );
}
