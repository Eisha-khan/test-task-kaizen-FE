import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="flex items-center w-[400px] gap-2 border-b border-gray-300 py-2">
      <input type="text" placeholder="Search" className="outline-none flex-1" />
      <MagnifyingGlassIcon className="h-6 w-6" />
    </div>
  );
};

export default Search;
