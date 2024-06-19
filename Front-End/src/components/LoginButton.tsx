import { Link } from "react-router-dom";
import { useUser } from "../userContext";

const LoginButton = () => {
  const { isLoggedIn, logOut } = useUser();
  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={logOut}
          aria-label="botão para fazer login"
          className="bg-darkblue hover:bg-lightblue dark:bg-lightblue dark:hover:bg-darkblue w-full text-white font-bold py-2 px-8 rounded-lg"
        >
          Sair
        </button>
      ) : (
        <Link to="/login">
          <button
            aria-label="botão para fazer login"
            className="bg-darkblue hover:bg-lightblue dark:bg-lightblue dark:hover:bg-darkblue w-full text-white font-bold py-2 px-8 rounded-lg"
          >
            Entrar
          </button>
        </Link>
      )}
    </>
  );
};

export default LoginButton;
