import Nav from "./Nav";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <header className=" top-0 flex-wrap z-[20] mx-auto flex bg-white dark:bg-black w-full items-center justify-between p-8">
        <a href="/">
          <span className="text-main text-3xl font-bold">Indaia</span>
          <span className="text-darkblue dark:text-lightblue text-3xl font-bold">
            Cult.
          </span>
        </a>
        <SearchBar />
        <Nav />
      </header>
    </>
  );
};

export default NavBar;
