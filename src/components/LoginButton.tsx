import React from "react";

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  window.location.href = '/login';
};

const LoginButton: React.FC = () => {
  return (
    <button onClick={handleClick} className="bg-lightblue hover:bg-darkblue text-white font-bold py-2 px-8 rounded-full">
      Login
    </button>
  );
};

export default LoginButton;
