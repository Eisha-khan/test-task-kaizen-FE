const Search = () => {
  return (
    <div className="flex items-center w-[400px] gap-2 border-b border-gray-300 py-2">
      <input type="text" placeholder="Search" className="outline-none flex-1" />
      <img
        src="https://icons.veryicon.com/png/o/file-type/file-icon-collection/operation-item-registration.png"
        width={20}
        height={20}
      />
    </div>
  );
};

export default Search;
