export default function Footer({ logo }) {
  return (
    <footer className="footer flex justify-center items-center p-4 text-white">
      <aside className="items-center flex">
        <p>App made by Isra</p>
      </aside>
      <div className=" divider-horizontal divider"></div>
      <nav className="flex gap-2 ">
        <a
          href="https://github.com/iwmartnz?tab=repositories"
          target="_blank"
          className="hover:text-accent"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 7.40972C9.5 7.40972 7.52419 6.04697 6.71774 6.29474C6.15323 7.74009 6.47581 8.81377 6.59677 9.10284C5.95161 9.84616 5.62903 10.383 5.62903 11.5393C5.62903 15.5037 7.92742 16.834 10.1855 17.0818C10.1855 17.0818 9.5 17.8624 9.5 18.9312C9.5 20 9.5 21.2024 9.5 21.4915C9.5 21.7393 9.33871 22.0697 8.81452 21.9871C6.71217 21.255 4.94963 19.8382 3.74405 18M13 7.12021C13.5288 7.16668 14.0423 7.2567 14.5403 7.40972C14.5403 7.40972 16.4758 6.00567 17.3226 6.29474C17.8871 7.74009 17.5242 8.81377 17.4435 9.10284C18.0887 9.84616 18.4919 10.383 18.4919 11.5393C18.4919 15.5037 16.1129 16.834 13.8548 17.0818C13.8548 17.0818 14.5349 18 14.5349 19C14.5349 20 14.5 21.1958 14.5 21.4502C14.5 21.7393 14.7016 22.0697 15.2258 21.9458C19.2581 20.583 22 16.6599 22 12.0761C22 6.37733 17.4435 2 11.8387 2C6.27419 2 2 6.37733 2 12.0761C2 12.9097 2.092 13.7213 2.26679 14.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/iwmartnz/"
          target="_blank"
          className="hover:text-accent"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 18V14C11.5 12.3431 12.8431 11 14.5 11V11C16.1569 11 17.5 12.3431 17.5 14V18M7.5 18V11M8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5M8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5M8 7.5H7M22 10V9.5V9.5C22 7.17029 22 6.00544 21.6194 5.08658C21.1119 3.86144 20.1386 2.88807 18.9134 2.3806C17.9946 2 16.8297 2 14.5 2H10C7.19974 2 5.79961 2 4.73005 2.54497C3.78924 3.02433 3.02433 3.78924 2.54497 4.73005C2 5.79961 2 7.19974 2 10V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H14.5C16.8297 22 17.9946 22 18.9134 21.6194C20.1386 21.1119 21.1119 20.1386 21.6194 18.9134C22 17.9946 22 16.8297 22 14.5V14.5V14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </nav>
    </footer>
  );
}
