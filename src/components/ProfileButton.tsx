import React, { useState } from "react";
import { FaCog, FaUserPlus } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaArrowRightToBracket, FaAsterisk, FaBookmark, FaComments, FaPenFancy, FaPlus, FaQuestion } from "react-icons/fa6";

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
    <section>
      
      <div className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <a href="/perfil">
          <button
          
            onClick={() => {
              toggleMenu();
              setOpenedByClick(true);
            }}
          >
            <img
              className="md:block hidden"
              width={50}
              height={50}
              src={ "/assets/profile-dark.svg" }
              alt="img"
            />
          </button>
        </a>

        {menuVisible && (
          <div className="absolute right-0 bg-white border border-gray-200 p-6 rounded shadow"
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}>
            <div className="menu-nav">
              <div className="user-info">
                <div className="profile-img"></div>
                <a href=""><h3 className="name">Hugo Fonseca</h3></a> <br />
              </div>
              <ul>
                <li><a href=""><span style={{ display: 'flex' }}><FaArrowRightArrowLeft /> Trocar</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaUserPlus />Adicionar Conta</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaPenFancy />Artista</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaPlus />Novo Post</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaBookmark />Salvos</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaComments />Comunidade</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaCog />Configurações</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaAsterisk />Termos de Serviço</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaQuestion />Duvidas</span></a></li>
                <li><a href=""><span style={{ display: 'flex' }}><FaArrowRightToBracket />Sair</span></a></li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProfileButton;