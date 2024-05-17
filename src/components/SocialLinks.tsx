import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

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
    <form>
      {socialLinks.map((link, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={link}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="Insira o Link da rede social"
            className="flex-1 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <button
        type="button"
        onClick={addSocialLink}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
      >
        Adicionar Rede Social
      </button>
    </form>
  );
};

export default SocialLinks;
