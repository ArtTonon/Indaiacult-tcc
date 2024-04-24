import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Senha: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

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
  <link rel="stylesheet" type="text/css" href="../../public/css/style.css" />
  
  <div className="login-container">
    <div>
      <img src="./cadeado-dark.png" alt="cadeado" />
      <h2>Problemas para entrar?</h2>
      <p>
        Insira o seu nome de usuário ou email e enviaremos um link para você
        voltar a acessar a sua conta.
      </p>
      <form id="login-form">
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
          Enviar link para login</button>
      </form>
      <img src="./ou-dark.png" alt="ou" />
      <a className="link" href="./signup.tsx">
        crie uma nova conta
      </a>
    </div>
  </div>
</>
  );
};

export default Senha;