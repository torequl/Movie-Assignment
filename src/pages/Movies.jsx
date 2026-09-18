import { useEffect, useState } from "react";
import { getShows } from "../services/movieApi";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const data = await getShows();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <main className="min-h-screen bg-white px-6 py-12">
    <div className="mx-auto max-w-7xl">

      <h1 className="text-3xl font-bold text-gray-900">
        Explore Movies
      </h1>

      <p className="mt-2 text-gray-500">
        Discover movies and TV shows from around the world.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shows.map((show) => (
          <MovieCard
            key={show.id}
            show={show}
          />
        ))}
      </div>

    </div>
  </main>
  );
}

export default Movies;