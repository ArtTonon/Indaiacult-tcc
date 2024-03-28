import React from "react";
import axios from "axios";
import { useState } from "react";
import { Divide } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
    } catch (error) {
      setError("Credenciais inválidas");
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-9 items-center justify-center w-full">
        <h1 className="font-bold text-3xl ">Login</h1>
        <p>
          Não possui uma conta?{" "}
          <a href="/cadastro" className="text-lightblue">
            Cadastre-se
          </a>
        </p>
      </div>
      <form className="flex flex-col items-center gap-20 justify-center w-full">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          type="email"
          placeholder="Insira seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-white border-b-lightblue mt-16 outline-none w-72"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-white border-b-lightblue outline-none w-72"
        />
        <button
          onClick={handleLogin}
          className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
