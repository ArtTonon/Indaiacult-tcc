import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useUser } from "../userContext";
import ProfileButton from "./ProfileButton";
import UserPicture from "./UserPicture";

const NavBar = () => {
  return (
    <>
      <aside className="sticky md:h-full md:flex lg:flex-col W-32 justify-between lg:gap-5 p-4 border-r-4 border-solid dark:border-highlightDark">
        <div className="flex flex-col gap-5 lg:flex-grow">
          <Link to="/" className="w-full">
            <span className="text-main text-xl md:text-3xl font-bold">
              Indaia
            </span>
            <span className="text-darkblue dark:text-lightblue text-xl md:text-3xl font-bold">
              Cult.
            </span>
          </Link>
          <Nav />
        </div>

        <UserPicture />
      </aside>
    </>
  );
};

export default NavBar;
