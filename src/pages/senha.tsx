import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context";

const Senha: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const handleSenha = async () => {
    try {
      const response = await axios.post("http://localhost:5173/senha.tsx", {
        email,
      });
      console.log(response.data);
      setEmail("");
      setSuccessMessage("Link enviado com sucesso");
      navigate("/login");
    } catch (error) {
      setError("Erro no email ou nome de usuário");
      console.error(error);
    }
  };

  return (
    <>
    <body>
      <link rel="stylesheet" type="text/css" href="../../public/css/senha.css" />
        <div className="login-container dark:bg-darkblue">
          <div>
          <img
          className="justify-content-center mb-2"
          width={150}
          height={150}
          src={
            darkMode
              ? "../../public/assets/cadeado-dark.svg"
              : "../../public/assets/cadeado-light.svg"
          }
          alt="cadeado"/> 
      <h2 className="dark:text-yellow">Problemas para entrar?</h2>
      <p className="dark:text-yellow">
        Insira o seu nome de usuário ou email e enviaremos um link para você
        voltar a acessar a sua conta.
      </p>
      <form id="login-form mb-1">
      {error && <div className="text-red-500 mb-4">{error}</div>}
        {succesMessage && (
          <div className="text-geen-500 mb-4">{succesMessage}</div>
        )}
        <div className="form-group">
        <input
          type="email"
          className="form-style"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div><br/>
        <button type="submit" 
        onClick={handleSenha}
        className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md">
          Enviar link para login
        </button>
      </form>
      <img
          className="justify-content-center mb-2"
          width={430}
          height={30}
          src={
            darkMode
              ? "../../public/assets/ou-dark.svg"
              : "../../public/assets/ou-light.svg"
          }
          alt="ou"/> 
      <a className="dark:text-main" type="link" href="./signup">
        crie uma nova conta
      </a>
    </div>
  </div>
  </body>
  </>
  );
};

export default Senha;
