import React from "react";
import axios from "axios";
import { useState } from "react";
import "../css/login.css";
import { MdOutlineAlternateEmail, MdOutlineLock } from "react-icons/md";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { SignUpUser } from "../services/SignUpService";
import { useUser } from "../userContext";

const SignUp: React.FC = () => {
  const { keepLoggedIn } = useUser();
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("As senhas não coincidem");
        return;
      }
      const error = await SignUpUser(name, email, password);
      if (error) {
        return setError(error);
      }

      setName("");
      setTelephone("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSuccessMessage("Cadastro realizado com sucesso");
      keepLoggedIn();
      navigate("/artists");
    } catch (error) {
      setError("erro ao cadastrar usuário");
      console.error(error);
    }
  };

  return (
    <>
      <LandingNav />
      <div className="circles">
        <ul>
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
        </ul>
      </div>
      <section className="mt-6 flex flex-col items-center justify-center">
        <div className="rounded-xl  relative bg-white dark:bg-diffBlack dark:text-white border-highlight dark:border-highlightDark border-4 px-32 py-16 flex flex-col items-center gap-8">
          <h1 className="font-semibold font-montserrat text-xl lg:text-4xl">
            Bem vindo ao <span className="text-main  font-bold">Indaia</span>
            <span className="text-darkblue dark:text-lightblue  font-bold">
              Cult.
            </span>
          </h1>

          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-6 text-xl w-full"
          >
            <label htmlFor="">
              <span className="font-montserrat">Nome</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                <FaRegUser className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  className="font-montserrat bg-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="">
              <span className="font-montserrat">E-mail</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                <MdOutlineAlternateEmail className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Insira seu e-mail"
                  className="font-montserrat bg-transparent "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="">
              <div>
                <select name="" id="">
                  <option value="Música"></option>
                  <option value="Escultura"></option>
                  <option value="Dança"></option>
                  <option value="Poesia"></option>
                </select>
              </div>
            </label>
            <label htmlFor="">
              <span className="font-montserrat">Senha</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark  p-3 rounded-lg">
                <MdOutlineLock className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Crie sua senha"
                  className="font-montserrat bg-transparent "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>

            <label htmlFor="">
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark  p-3 rounded-lg">
                <MdOutlineLock className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Confirme sua senha"
                  className="font-montserrat bg-transparent "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </label>

            <button
              type="submit"
              className="py-2 font-bold rounded-lg bg-darkblue dark:bg-lightblue text-white"
            >
              Cadastrar-se
            </button>
          </form>
          <Link to="/login" className="text-xl underline">
            Já possui uma conta?
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignUp;
