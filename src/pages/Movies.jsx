import { useEffect, useState } from "react";
import { getShows, searchShows } from "../services/movieApi";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import MovieModal from "../components/MovieModal";

function Movies() {
    const [shows, setShows] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedShow, setSelectedShow] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const showsPerPage = 12;

    useEffect(() => {
        const fetchShows = async () => {
            try {
                setLoading(true);
                setError("");

                if (searchQuery.trim() === "") {
                    const data = await getShows();

                    setShows(data);
                    return;
                }

                const results = await searchShows(searchQuery);

                const searchedShows = results.map((result) => result.show);

                setShows(searchedShows);
            } catch {
                setError("Something went wrong. Please try again.");
                setShows([]);
            } finally {
                setLoading(false);
            }
        };

        fetchShows();
    }, [searchQuery]);

    const totalPages = Math.ceil(shows.length / showsPerPage);

    const startIndex = (currentPage - 1) * showsPerPage;

    const currentShows = shows.slice(
        startIndex,
        startIndex + showsPerPage
    );

    return (
        <main className="min-h-screen bg-white px-6 py-12">
            <div className="mx-auto max-w-7xl">

                <h1 className="text-3xl font-bold text-gray-900">
                    Explore Movies
                </h1>

                <p className="mt-2 text-gray-500">
                    Discover movies and TV shows from around the world.
                </p>

                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                {loading && (
                    <div className="py-20 text-center">
                        <p className="text-gray-500">
                            Loading movies...
                        </p>
                    </div>
                )}

                {error && (
                    <div className="py-20 text-center">
                        <p className="text-red-500">
                            {error}
                        </p>
                    </div>
                )}

                {!loading && !error && shows.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-500">
                            No movies found.
                        </p>
                    </div>
                )}

                {!loading && !error && shows.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {currentShows.map((show) => (
                            <MovieCard
                                key={show.id}
                                show={show}
                                onDetails={() => setSelectedShow(show)}
                            />
                        ))}
                    </div>
                )}

            </div>


            {!loading && !error && totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">

                    <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((page) => page - 1)}
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Previous
                    </button>

                    <span className="px-4 text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((page) => page + 1)}
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next
                    </button>

                </div>
            )}


            <MovieModal
                show={selectedShow}
                onClose={() => setSelectedShow(null)}
            />
        </main>
    );
}

export default Movies;