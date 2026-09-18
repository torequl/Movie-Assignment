function MovieCard({ show }) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <img
        src={show.image?.medium}
        alt={show.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="truncate text-lg font-semibold text-gray-900">
          {show.name}
        </h2>

        <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
          <span>
            ⭐ {show.rating?.average || "N/A"}
          </span>

          <span>•</span>

          <span>
            📅 {show.premiered?.slice(0, 4) || "N/A"}
          </span>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;