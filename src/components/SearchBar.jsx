function SearchBar({ value, onChange }) {
  return (
    <div className="mt-8">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a movie..."
        className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-500"
      />
    </div>
  );
}

export default SearchBar;