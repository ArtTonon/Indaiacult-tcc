import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleThemeButton";

const LandingNav = () => {
  return (
    <section>
      <div className="flex items-center justify-between p-5">
        <div>
          <Link to="/">
            <span className="text-main text-3xl font-bold">Indaia</span>
            <span className="dark:text-lightblue text-darkblue text-3xl font-bold">
              Cult.
            </span>
          </Link>
        </div>
        <div className="flex justify-end items-center space-x-6">
          <Link
            to="/sobre"
            className="font-montserrat text-lg md:text-2xl font-bold text-darkblue dark:text-lightblue hover:underline"
          >
            Sobre
          </Link>
          <ToggleThemeButton />
        </div>
      </div>
    </section>
  );
};

export default LandingNav;
