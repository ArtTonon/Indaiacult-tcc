import { SearchIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="flex w-1/3 justify-start">
      <form className="w-8">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <SearchIcon width={20} height={20} className="absolute ml-2  " />
          <input
            placeholder="Pesquisar"
            type="search"
            className="pr-4 pl-8 py-1 border-none ring-2 ring-darkblue focus:ring-main focus:ring-2 dark:ring-lightblue rounded-md outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
