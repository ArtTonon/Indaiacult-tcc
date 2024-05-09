
import React, { useState } from "react";

const ProfileButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openedByClick, setOpenedByClick] = useState(false);

  const toggleMenu = () => {
    if (!openedByClick) {
      setMenuVisible(!menuVisible);
    }
    setOpenedByClick(false);
  };

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  const handleMenuMouseEnter = () => {
    setMenuVisible(true);
    setOpenedByClick(false);
  };

  const handleMenuMouseLeave = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <link rel="stylesheet" href="../../public/css/menu.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>

      <div className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <a href="/login">
          <button
            className="bg-darkblue hover:bg-lightblue dark:bg-lightblue dark:hover:bg-darkblue text-white font-bold py-2 px-8 rounded-full"
            onClick={() => {
              toggleMenu();
              setOpenedByClick(true);
            }}
          >
            Login
          </button>
        </a>

        {menuVisible && (
          <div className="absolute top-10 right-0 bg-white border border-gray-200 p-2 rounded shadow"
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}>
            <div className="menu-nav">
              <div className="user-info">
                <div className="profile-img"></div>
                <a href=""><h3 className="name">Hugo Fonseca</h3></a> <br />
              </div>
              <ul>
                <li><a href=""><span className="fas fa-repeat"></span>Trocar</a></li>
                <li><a href="./login"><span className="fas fa-user-plus"></span>Adicionar Conta</a></li>
                <li><a href="./artists"><span className="fas fa-pen-nib"></span>Artista</a></li>
                <li><a href=""><span className="fas fa-plus"></span>Novo Post</a></li>
                <li><a href=""><span className="fas fa-bookmark"></span>Salvos</a></li>
                <li><a href=""><span className="fas fa-comments"></span>Comunidade</a></li>
                <li><a href=""><span className="fas fa-cogs"></span>Configurações</a></li>
                <li><a href=""><span className="fas fa-asterisk"></span>Termos de Serviço</a></li>
                <li><a href=""><span className="fas fa-question"></span>Duvidas</a></li>
                <li><a href=""><span className="fas fa-arrow-right"></span>Sair</a></li>
              </ul>
            </div>
          </div>
        )}

      </div>
      <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
      <script src='https://raw.githubusercontent.com/julianshapiro/velocity/master/velocity.min.js'></script>
    </>
  );
};

export default ProfileButton;