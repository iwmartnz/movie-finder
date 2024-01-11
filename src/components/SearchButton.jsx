export default function SearchButton({ children, loading }) {
  return (
    <button className="btn btn-square btn-primary ease-in-out">
      {loading ? (
        <span className=" animate-spin text-accent">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C17.5228 2 22 6.47715 22 12C22 13.4222 21.7031 14.7751 21.1679 16M3.03947 7.55556C2.37412 8.8944 2 10.4035 2 12C2 14.2512 2.74389 16.3287 3.99927 18M19.1414 19C17.3265 20.8514 14.7974 22 12 22C10.1786 22 8.47087 21.513 7 20.6622"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L18.4953 18.4953C18.1033 18.1033 17.9073 17.9073 17.7092 17.8311C17.5121 17.7553 17.3684 17.7425 17.161 17.7825C16.9527 17.8226 16.6814 18.0117 16.1387 18.3897C14.6817 19.4048 12.9104 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 12.2414 19.7487 13.4241 19.2941 14.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
