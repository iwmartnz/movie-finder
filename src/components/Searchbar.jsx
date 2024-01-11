export default function Searchbar({ search, handleChange }) {
  return (
    <input
      type="text"
      placeholder="Avengers, madmax, matrix"
      className="input input-primary bg-[#2b2b2b] text-white  placeholder:text-neutral-300 focus:input-accent w-full max-w-xs"
      value={search}
      onChange={handleChange}
    />
  );
}
