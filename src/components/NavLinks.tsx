import LoginButton from "./LoginButton";
import ToggleThemeButton from "./ToggleThemeButton";

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <>
      <a
        href="/artist"
        onClick={closeMenu}
        className={`text-lg text-darkblue dark:text-lightblue font-medium relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
          isActive("/artist") ? "font-bold" : ""
        }`}
      >
        Artistas
      </a>
      <a
        href="/obras"
        className={`text-lg text-darkblue dark:text-lightblue font-medium relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
          isActive("/obras") ? "font-bold" : ""
        }`}
      >
        Obras
      </a>
      <a
        href="/sobre"
        className={`text-lg text-darkblue dark:text-lightblue font-medium relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
          isActive("/sobre") ? "font-bold" : ""
        }`}
      >
        Sobre
      </a>
      <LoginButton closeMenu={closeMenu} />
      <ToggleThemeButton/>
    </>
  );
};

export default NavLinks;
