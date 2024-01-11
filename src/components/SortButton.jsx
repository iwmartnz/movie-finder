export default function SortButton({ sort, handleSort }) {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="btn"
        onChange={handleSort}
        checked={sort}
      />
      {/* active icon */}
      <div className="  btn btn-square btn-primary swap-off">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 18L7 22V14M7 3V10M4.5 19.5L3 18M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* inactive icon */}
      <div className="btn btn-square btn-primary text-accent swap-on">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 18L7 22V14M7 3V10M4.5 19.5L3 18M16 14H21L16 22H21M16 10V7M16 7V4.5C16 3.11929 17.1193 2 18.5 2C19.8807 2 21 3.11929 21 4.5V7M16 7H21M21 7V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </label>
  );
}
