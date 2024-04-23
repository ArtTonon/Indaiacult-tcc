import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:5173/signup", {
        name,
        email,
        telephone,
        password
      });
      console.log(response.data);
      setName("");
      setTelephone("");
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
    <>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="login.css" />
  <div>
    <ul className="circles">
      <li/><li/><li/><li/><li/><li/>
      <li/><li/><li/><li/><li/><li/>
      <li/><li/><li/><li/></ul>
  </div>
  <div className="section">
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3">
            <a href="/login.tsx">
              <span>Logar</span></a>
              <span>Inscrever</span>
            </h6>
            <label htmlFor="reg-log" />
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-signup">
                  <div className="center-wrap">
                    <div className="section text-center">
                    <form className="flex flex-col items-center gap-8 justify-center w-full">
                      {error && <div className="text-red-500 mb-4">{error}</div>}
                      {succesMessage && (
                        <div className="text-geen-500 mb-4">{succesMessage}</div>
                    )}
                      <h4 className="mb-3 pb-3">Inscreva-se</h4>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-style"
                          placeholder="Nome Completo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <i className="input-icon uil uil-user" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="tel"
                          className="form-style"
                          placeholder="Telefone"
                          value={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                        />
                        <i className="input-icon uil uil-phone" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          className="form-style"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="input-icon uil uil-at" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          className="form-style"
                          placeholder="Senha"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="input-icon uil uil-lock-alt" />
                      </div>
                      <button
                        onClick={handleSignUp}
                        className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md"
                        >
                          Criar conta
                      </button>
                      <p className="mb-0 mt-4 text-center">
                        <a
                          className="oi"
                          href="./artistas/artista.html"
                          type="link"
                        >
                          Você é artista? Clique aqui
                        </a>
                      </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default SignUp;

/* 

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

*/