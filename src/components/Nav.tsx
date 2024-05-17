import { ReactElement, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LoginButton from "./LoginButton";
import ToggleThemeButton from "./ToggleThemeButton";
import { LuPalette } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { PiFrameCorners } from "react-icons/pi";
import { IoInformationCircleOutline } from "react-icons/io5";

const NavLink = ({
  icon,
  path,
  name,
}: {
  icon: ReactElement;
  path: string;
  name: string;
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === `/${path}`;
  return (
    <Link
      to={`/${path}`}
      className={`flex items-center gap-2 text-xl w-44 text-darkblue dark:text-lightblue font-medium p-2 rounded-md ${
        isActive && "bg-highlight dark:bg-highlightDark dark:text-main "
      }`}
    >
      {icon}
      {name}
    </Link>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavLink path="artists" name="Artistas" icon={<LuPalette />} />
      <NavLink path="obras" name="Obras" icon={<PiFrameCorners />} />
      <NavLink
        path="sobre"
        name="Sobre"
        icon={<IoInformationCircleOutline />}
      />

      <LoginButton></LoginButton>
      <ToggleThemeButton></ToggleThemeButton>
    </>
  );
};

const Nav = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleNavBar = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex flex-col">
        <div className="hidden gap-4 md:flex flex-col">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleNavBar}
          >
            {isOpen ? (
              <X
                className="dark:text-white"
                aria-label="Ícone X para fechar menu"
              />
            ) : (
              <Menu
                className="dark:text-white"
                aria-label="Ícone de 3 barras para abrir o menu"
              />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full my-6 gap-5">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
