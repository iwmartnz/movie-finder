import logo from "/src/assets/film.svg";
import { useEffect, useRef, useState } from "react";

import { useMovies } from "./hooks/useMovies";
import MovieGrid from "./components/MovieGrid";
import SearchButton from "./components/SearchButton";
import SortButton from "./components/SortButton";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === " ") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error, isFirstInput };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error, isFirstInput } = useSearch();
  const { movies, loading, getMovies, isFirstSearch } = useMovies({
    search,
    sort,
  });

  function handleChange(e) {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    updateSearch(newQuery);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search === "" || search.length < 3) {
      return null;
    } else {
      getMovies({ search });
    }
  }

  const handleSort = () => {
    //bug to fix
    setSort(!sort);
  };

  console.log(movies);

  return (
    <div className=" w-full h-full min-h-screen flex flex-col relative text-white">
      <header className=" flex items-center flex-col pt-16 pb-20 gap-4 ">
        <div className="flex items-center gap-4 w-fit">
          <figure className=" h-10 w-10 relative">
            <img src={logo} alt="" className=" h-full w-full object-cover" />
          </figure>
          <h1 className="text-4xl text-center w-fit font-['Moirai_One'] font-black ">
            Movie Finder
          </h1>
        </div>
        <form action="" className="relative flex gap-4" onSubmit={handleSubmit}>
          <Searchbar search={search} handleChange={handleChange} />
          <SearchButton loading={loading} />
          <SortButton handleSort={handleSort} sort={sort} />
          {error && (
            <p className="absolute top-16 left-0 text-white-50">{error}</p>
          )}
        </form>
      </header>
      <main className=" flex justify-center h-full flex-1 pb-10">
        {movies?.length > 0 ? (
          <MovieGrid movies={movies} />
        ) : isFirstInput.current ? (
          <p className="text-lg max-w-md text-center font-light px-4">
            <span className=" animate-bounce ease-in-out flex justify-center text-accent">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21L12 3L5 10M19 10L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Welcome to the <strong>Movie Finder App</strong>, please enter the
            title of the movie you would like to search
          </p>
        ) : (
          search.length > 3 && isFirstSearch && <p>No movies found</p>
        )}
      </main>
      <Footer logo={logo} />
    </div>
  );
}

export default App;
