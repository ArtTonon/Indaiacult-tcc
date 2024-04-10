import React from "react";
import axios from "axios";
import { useState } from "react";
import { } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5173/login", {
        email,
        password,
      });
    } catch (error) {
      setError("Credenciais inválidas");
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
  {window.location.pathname !== '/login' && (
        <div>
          <div className="circles">
            <li/><li/><li/><li/><li/><li/>
            <li/><li/><li/><li/><li/><li/>
            <li/><li/><li/><li/>
          </div>
        </div>
      )}
<div className="flex flex-col justify-center md:flex-row bg-white dark:bg-black items-center px-8">
      <div className="row full-height justify-content-center">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3">
              <span>Logar </span>
              <a href="/signup">
              <span>Inscrever</span></a>
            </h6>
            <div className="card-3d-wrap mx-auto">
                <div className="card-login">
                  <div className="center-wrap">
                    <div className="section text-center">
                    <form className="flex flex-col items-center gap-8 justify-center w-full">
                      {error && <div className="text-red-500 mb-4">{error}</div>}
                      <h4 className="mb-3 pb-3">Logar</h4>
                      <div className="form-group">
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
                        onClick={handleLogin}
                        className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md"
                      >
                       Entrar
                      </button>
                      <p className="mb-0 mt-4 text-center">
                        <a href="" className="link">
                          Esqueceu a senha?
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

</>
  );
};

export default Login;

/*
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
*/