import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login">
      <button
        aria-label="botão para fazer login"
        className="bg-darkblue hover:bg-lightblue dark:bg-lightblue dark:hover:bg-darkblue w-full text-white font-bold py-2 px-8 rounded-lg"
      >
        Login
      </button>
    </Link>
  );
};

export default LoginButton;
