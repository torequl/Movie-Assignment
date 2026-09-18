import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import { getShows } from "../services/movieApi";
import MovieModal from "../components/MovieModal";

function Home() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchLatestShows = async () => {
      const data = await getShows();

      const latestShows = data
        .filter((show) => show.premiered)
        .sort(
          (a, b) =>
            new Date(b.premiered) - new Date(a.premiered)
        )
        .slice(0, 8);

      setShows(latestShows);
    };

    fetchLatestShows();
  }, []);

  return (
    <>
      <Hero />

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Latest Releases
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                New Movies & Shows
              </h2>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onDetails={() => setSelectedShow(show)}
              />
            ))}
          </div>

        </div>
      </section>

      <MovieModal
                show={selectedShow}
                onClose={() => setSelectedShow(null)}
            />

      <Footer />
    </>
  );
}

export default Home;