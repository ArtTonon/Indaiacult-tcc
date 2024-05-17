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
              className="md:block hidden object-cover rounded-full border-4 border-darkblue dark:border-lightblue"
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
          <div className="absolute bottom:100% bg-white border border-gray-200 p-6 rounded shadow" style={{ zIndex: 10 }}
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}>
            <div className="menu-nav">
              <div className="user-info">
                <div className="profile-img"></div>
                <a href=""><h3 className="name">Hugo Fonseca</h3></a> <br />
              </div>
              <ul className="text-darkblue">
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaArrowRightArrowLeft style={{marginRight: '10px'}}/> 
                  Trocar</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaUserPlus style={{marginRight: '10px'}}/> 
                  Adicionar_Conta</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaPenFancy style={{marginRight: '10px'}}/> 
                  Artista</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaPlus style={{marginRight: '10px'}}/> 
                  Novo_Post</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaBookmark style={{marginRight: '10px'}}/> 
                  Salvos</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaComments style={{marginRight: '10px'}}/> 
                  Comunidade</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaCog style={{marginRight: '10px'}}/> 
                  Configurações</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaAsterisk style={{marginRight: '10px'}}/> 
                  Termos_de_Serviço</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaQuestion style={{marginRight: '10px'}}/> 
                  Duvidas</span></a>
               <a href="" className="hover:text-main dark:hover:text-lightblue">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaArrowRightToBracket style={{marginRight: '10px'}}/> 
                  Sair</span></a>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProfileButton;