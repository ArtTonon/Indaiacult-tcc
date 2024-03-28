import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8000/registrar", {
        name,
        email,
        password,
      });
      console.log(response.data);
      setName("");
      setEmail("");
      setPassword("");
      setSuccessMessage("Cadastro realizado com sucesso");
      navigate("/login");
    } catch (error) {
      setError("erro ao cadastrar usuário");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-9 items-center justify-center w-full">
        <h1 className="text-4xl font-bold">Cadastre-se</h1>
        <p>
          Já possui uma conta? Faça{" "}
          <a href="/login" className="text-lightblue">
            Login
          </a>
        </p>
      </div>
      <form className="flex flex-col items-center gap-8 justify-center w-full">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {succesMessage && (
          <div className="text-geen-500 mb-4">{succesMessage}</div>
        )}
        <input
          type="text"
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-white border-b-lightblue mt-16 outline-none w-72"
        />
        <input
          type="email"
          placeholder="Insira seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-white border-b-lightblue mt-16 outline-none w-72"
        />
        <input
          type="password"
          placeholder="Crie uma senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-white border-b-lightblue mt-16 outline-none w-72"
        />
        <button
          onClick={handleSignUp}
          className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md"
        >
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default SignUp;
