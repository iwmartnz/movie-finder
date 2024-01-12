const API_URL = `https://omdbapi.com/?&apikey=${
  import.meta.env.VITE_API_KEY
}&s=`;

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(API_URL + search);
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      type: movie.Type,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
