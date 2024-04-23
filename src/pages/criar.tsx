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
  <title>Create a New Password</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <iframe
    src="./particle/index.html"
    frameBorder={0}
    width="100%"
    height={500}
  />
  <div className="container">
    <h1>Create a New Password</h1>
    <form id="password-form">
      <label htmlFor="password">New Password:</label>
      <input type="password" id="password" name="password" required="" />
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        required=""
      />
      <button type="submit">Save New Password</button>
    </form>
  </div>
</>

    );
};

export default Senha;