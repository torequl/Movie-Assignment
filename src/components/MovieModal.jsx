function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white">

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-gray-700 shadow-sm hover:bg-gray-100"
        >
          ✕
        </button>

        <img
          src={show.image?.original || show.image?.medium}
          alt={show.name}
          className="h-72 w-full object-cover"
        />

        <div className="p-6">

          <h2 className="text-3xl font-bold text-gray-900">
            {show.name}
          </h2>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>
              ⭐ {show.rating?.average || "N/A"}
            </span>

            <span>
              📅 {show.premiered?.slice(0, 4) || "N/A"}
            </span>

            {show.runtime && (
              <span>
                ⏱ {show.runtime} min
              </span>
            )}
          </div>

          {show.genres?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Overview
            </h3>

            <div
              className="mt-2 leading-7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: show.summary || "No summary available.",
              }}
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}

export default MovieModal;