import { Link } from "react-router";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl">

          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">
            Your Movie Discovery Hub
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
            Discover Your Next{" "}
            <span className="text-amber-500">
              Favorite Movie
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore movies and TV shows from around the world.
            Search for your favorite titles and discover something
            new to watch.
          </p>

          <Link
            to="/movies"
            className="mt-8 inline-block rounded-md bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Explore Movies →
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;