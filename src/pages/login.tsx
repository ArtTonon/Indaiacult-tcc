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
      const response = await axios.post("http://localhost:5173/login", {
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
              <span>Logar </span>
              <span>Inscrever</span>
            </h6>
            <input
              className="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
            />
            <label htmlFor="reg-log" />
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                    <form className="flex flex-col items-center gap-20 justify-center w-full">
                      {error && <div className="text-red-500 mb-4">{error}</div>}
                      <h4 className="mb-4 pb-3">Logar</h4>
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
      </div>
    </div>
  </div>
</>
  );
};

export default Login;
