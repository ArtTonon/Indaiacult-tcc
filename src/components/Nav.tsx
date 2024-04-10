import { useState } from "react";
import { Menu, X } from "lucide-react";
import LoginButton from "./LoginButton";
import ToggleThemeButton from "./ToggleThemeButton";

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => { // Adicionando closeMenu como prop
  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <>
      <a
        href="/artistas"
        onClick={closeMenu} // Fechar o menu de navegação ao clicar no link
        className={`text-lg text-darkblue dark:text-lightblue font-medium relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
          isActive("/artistas") ? "font-bold" : ""
        }`}
      >
        Artistas
      </a>
      <a
        href="/Obras"
        className="text-lg text-darkblue dark:text-lightblue font-semibold relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        Obras
      </a>
      <a
        href="/Sobre"
        className="text-lg  text-darkblue dark:text-lightblue font-semibold relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        Sobre
      </a>
      {/* Outros links */}
      <LoginButton closeMenu={closeMenu} /> {/* Passar closeMenu como prop para LoginButton */}
      <ToggleThemeButton />
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Função para fechar o menu de navegação
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-between items-center md:flex">
          <NavLinks closeMenu={closeMenu} /> {/* Passar closeMenu como prop para NavLinks */}
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full my-6 gap-5">
          <NavLinks closeMenu={closeMenu} /> {/* Passar closeMenu como prop para NavLinks */}
        </div>
      )}
    </>
  );
};

export default Nav;
