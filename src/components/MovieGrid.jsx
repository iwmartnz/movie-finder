import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <ul className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center max-w-6xl">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
