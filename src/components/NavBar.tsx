import Nav from "./Nav";
import SearchBar from "./SearchBar";
import Logo from "../../public/Logo.png";

const NavBar = () => {
  return (
    <>
      <header className="top-0 flex w-full items-center gap-5 p-8">
        <a href="/" className="flex items-center w-full">
          <img src={Logo} alt="logo" width={50} height={50} />
          <span className="text-main text-3xl font-bold">Indaia</span>
          <span className="text-darkblue dark:text-lightblue text-3xl font-bold">
            Cult.
          </span>
        </a>
        <div className="hidden md:block w-full">
          <SearchBar />
        </div>
        <Nav />
      </header>
    </>
  );
};

export default NavBar;
