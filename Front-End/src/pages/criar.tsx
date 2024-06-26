import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineLock } from "react-icons/md";
import LandingNav from "../components/LandingNav";
import "../css/login.css";

const Senha: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSenha = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("As duas senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5173/criar", {
        password,
      });
      console.log(response.data);
      setPassword("");
      setConfirmPassword("");
      setSuccessMessage("A nova senha foi salva com sucesso.");
      setError(""); // Limpar mensagem de erro, se houver
      navigate("/login");
    } catch (error) {
      setError("Erro ao criar usuário");
      setSuccessMessage(""); // Limpar mensagem de sucesso, se houver
      console.error(error);
    }
  };

  return (
    <>
      <LandingNav />
      <div className="circles">
        <ul>
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
        </ul>
      </div>
      <section className="mt-40 flex flex-col items-center justify-center">
        <div className="rounded-xl z-10 relative bg-white dark:bg-diffBlack dark:text-white border-highlight dark:border-highlightDark border-4 px-16 py-14 flex flex-col items-center gap-8">
          <h1 className="font-semibold font-montserrat text-xl lg:text-4xl">
            Criar uma nova{" "}
            <span className="text-main dark:text-lightblue font-bold">
              senha
            </span>
          </h1>
          <form
            onSubmit={handleSenha}
            className="flex flex-col gap-6 text-xl w-full"
          >
            <label>
              <span className="font-montserrat">Senha</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark  p-3 rounded-lg">
                <MdOutlineLock className="text-darkblue dark:text-main text-2xl" />
                <input
                  type="password"
                  placeholder="Crie sua senha"
                  className="font-montserrat bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>

            <label>
              <span className="font-montserrat">Confirme sua senha</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark  p-3 rounded-lg">
                <MdOutlineLock className="text-darkblue dark:text-main text-2xl" />
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  className="font-montserrat bg-transparent"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </label>

            {error && (
              <div className="text-red-500 font-montserrat text-sm">
                {error}
              </div>
            )}
            {successMessage && (
              <div className="text-green-500 font-montserrat text-sm">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="py-2 font-bold rounded-lg bg-darkblue dark:bg-main text-white hover:bg-main dark:hover:bg-lightblue"
            >
              Salvar nova senha
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Senha;
