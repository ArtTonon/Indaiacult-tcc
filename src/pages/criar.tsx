import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Senha: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSenha = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("The new password and confirm password do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5173/criar", {
        password
      });
      console.log(response.data);
      setPassword("");
      setConfirmPassword("");
      setSuccessMessage("The new password has been saved successfully.");
      navigate("/login");
    } catch (error) {
      setError("Error while creating user");
      console.error(error);
    }
  };

  return (
    <>
    <body>
  <link rel="stylesheet" type="text/css" href="../../public/css/criar.css" />
  <title>Criar Nova Senha</title>
  {error && <div className="text-red-500 mb-4">{error}</div>}
      {successMessage && (
       <div className="text-geen-500 mb-4">{successMessage}</div>
   )}
  <div className="container dark:bg-darkblue">
    <h1 className="dark:text-yellow">Criar Nova Senha</h1>
    <form id="password-form" onSubmit={handleSenha}>
      <label htmlFor="password" className="dark:text-yellow">Nova Senha:</label>
      <input
         type="password"
         className="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm-password" className="dark:text-yellow">Confirmar Senha:</label>
      <input
         type="password"
         className="confirm-password"
         placeholder="Confirm Password"
         value={confirmPassword}
         onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-lightblue w-72 py-3 rounded-md"
      >
        Salvar Nova Senha
      </button>
    </form>
  </div>
  </body>
</>
  );
};

export default Senha;
