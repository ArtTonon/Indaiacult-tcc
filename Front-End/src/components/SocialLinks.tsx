import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState<string[]>([""]);

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, ""]);
  };

  const removeSocialLink = (index: number) => {
    const newLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(newLinks);
  };

  const handleInputChange = (index: number, value: string) => {
    const newLinks = [...socialLinks];
    newLinks[index] = value;
    setSocialLinks(newLinks);
  };
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="">
        <span className="font-montserrat dark:text-white">Redes sociais</span>
        <div className="flex gap-4">
          <div className="flex flex-row items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
            <FaInstagram className="text-darkblue dark:text-lightblue text-2xl" />
            <input
              type="text"
              placeholder="Insira o link"
              className="font-montserrat bg-transparent "
            />
          </div>
          <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
            <FaFacebook className="text-darkblue dark:text-lightblue text-2xl" />
            <input
              type="text"
              placeholder="Insira o link"
              className="font-montserrat bg-transparent"
            />
          </div>
        </div>
      </label>
      <div>
        {socialLinks.map((link, index) => (
          <div key={index} className="flex items-center space-x-2 gap-4">
            <input
              type="text"
              value={link}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Insira o Link da rede social"
              className="flex-1 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2"
            />

            <button
              type="button"
              onClick={() => removeSocialLink(index)}
              className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
            >
              <IoMdClose />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addSocialLink}
        className="px-4 py-2 text-white bg-lightblue rounded  focus:outline-none"
      >
        Adicionar Rede Social
      </button>
    </form>
  );
};

export default SocialLinks;
