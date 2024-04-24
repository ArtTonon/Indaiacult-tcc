import React from "react";

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  window.location.href = '/login';
};

const LoginButton: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => { // Receber closeMenu como prop
  const handleClickWithCloseMenu: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    closeMenu(); // Fechar o menu de navegação
    handleClick(event); // Redirecionar para a página de login
  };

  return (
    <div>
      <button onClick={handleClickWithCloseMenu} className="bg-darkblue hover:bg-lightblue dark:bg-lightblue dark:hover:bg-darkblue text-white font-bold py-2 px-8 rounded-full">
      Login
    </button>
    </div>
  );
};

export default LoginButton;

/*import React from "react";

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  window.location.href = '/login';
};

const LoginButton: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => { // Receber closeMenu como prop
  const handleClickWithCloseMenu: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    closeMenu(); // Fechar o menu de navegação
    handleClick(event); // Redirecionar para a página de login
  };

  return (
    <button onClick={handleClickWithCloseMenu} className="bg-lightblue hover:bg-darkblue text-white font-bold py-2 px-8 rounded-full">
      Login
    </button>
  );
};

export default LoginButton;
*/