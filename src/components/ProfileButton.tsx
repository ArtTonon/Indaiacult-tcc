import React, { useState } from "react";
import { useTheme } from "../context";
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

  const { darkMode } = useTheme();

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
              src={  darkMode
                ? "/assets/profile-light.svg"
                : "/assets/profile-dark.svg"
               }
              alt="img"
            />
          </button>
        </a>

        {menuVisible && (
          <div className="absolute right-0 bg-white border border-gray-200 p-6 rounded shadow" style={{ zIndex: 10 }}
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}>
            <div className="menu-nav">
              <div className="user-info">
                <div className="profile-img"></div>
                <a href=""><h3 className="name">Hugo Fonseca</h3></a> <br />
              </div>
              <ul>
               <a href=""><span style={{ display: 'flex' }}><FaArrowRightArrowLeft /> Trocar</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaUserPlus />Adicionar_Conta</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaPenFancy />Artista</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaPlus />Novo_Post</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaBookmark />Salvos</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaComments />Comunidade</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaCog />Configurações</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaAsterisk />Termos_de_Serviço</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaQuestion />Duvidas</span></a>
               <a href=""><span style={{ display: 'flex' }}><FaArrowRightToBracket />Sair</span></a>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProfileButton;