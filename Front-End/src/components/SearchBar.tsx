import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex ">
      <form className="">
        <div className="flex items-center gap-2 text-black focus-within:text-gray-600 py-1 px-2 border-none ring-2 ring-darkblue focus:ring-main focus:ring-2 dark:ring-lightblue rounded-md outline-none bg-white">
          <SearchIcon width={20} height={20} />
          <input placeholder="Pesquisar" type="search" className=" " />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
