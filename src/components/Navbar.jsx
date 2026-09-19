import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="border-b border-slate-300 bg-white/20 sticky top-0 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-600"
        >
          NEXTFLIX
        </Link>

        {/* Navigation */}
        <div className="md:flex hidden items-center gap-8">
          <Link
            to="/"
            className="text-slate-800 transition hover:text-slate-600"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-slate-800 transition hover:text-slate-600"
          >
            Movies
          </Link>

          <Link
            to="/movies"
            className="rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Explore Movies
          </Link>
        </div>

        <Link
            to="/movies"
            className="rounded-lg md:hidden bg-amber-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Explore Movies
          </Link>

      </div>
    </nav>
  );
}

export default Navbar;