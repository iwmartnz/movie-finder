export default function MovieCard({ movie }) {
  return (
    <div className=" w-60 bg-neutral-800 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform">
      <figure className="relative w-full h-[350px] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className=" object-cover h-full w-full"
        />
      </figure>
      <div className="p-3">
        <h2 className=" text-lg text-neutral-50 font-semibold">
          {movie.title}
        </h2>
        <p className=" text-neutral-400">{movie.year}</p>
      </div>
    </div>
  );
}
