import React from "react";
import axios from "axios";
import { useState } from "react";

const Senha: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSenha = async () => {
    try {
      await axios.post("http://localhost:5173/login", {
        email,
      });
    } catch (error) {
      setError("Credenciais inválidas");
    }
    
  };

return (
<>
<link rel="stylesheet" type="text/css" href="./style.css" />
  <iframe
    src="./mouse efect/index.html"
    frameBorder={0}
    width="100%"
    height={500}
  />
  <div className="login-container">
  {error && <div className="text-red-500 mb-4">{error}</div>}
    <div>
      <img src="./cadeado-dark.png" alt="cadeado" />
      <h2>Problemas para entrar?</h2>
      <p>
        Insira o seu nome de usuário ou email e enviaremos um link para você
        voltar a acessar a sua conta.
      </p>
      <form id="login-form">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Email ou nome de usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button 
            type="submit"
            onClick={handleSenha}
            className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md"
        >Enviar link para login
        </button>
      </form>
      <img src="ou-dark.png" alt="ou" />
      <a className="signup" href="./../../signup.html">
        crie uma nova conta
      </a>
    </div>
  </div>
</>
    );
};

export default Senha;