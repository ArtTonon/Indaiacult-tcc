import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/*Link*/
function verificarLink() {
  var redeSocialElement = document.getElementById(
    "rede-social"
  ) as HTMLInputElement;
  var linkElement = document.getElementById(
    "link-rede-social"
  ) as HTMLInputElement;
  var errorMessage = document.getElementById("error");

  if (!redeSocialElement || !linkElement || !errorMessage) {
    return;
  }

  var redeSocial = redeSocialElement.value;
  var link = linkElement.value;

  if (redeSocial === "") {
    errorMessage.textContent = "Por favor, selecione a rede social primeiro.";
    return;
  }

  if (!link.toLowerCase().startsWith(redeSocial.toLowerCase())) {
    errorMessage.textContent =
      "O link fornecido não corresponde à rede social selecionada.";
  } else {
    errorMessage.textContent = "";
  }
}

/*Perfil*/
const handleFileUploadChange = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document
        .getElementById("profile-image")
        ?.setAttribute("src", (event?.target as FileReader)?.result as string);
    };
    reader.readAsDataURL(file);
  }
};

/*Tipo de Artes*/
document.addEventListener("DOMContentLoaded", function () {
  const selectTipos = document.getElementById(
    "select-tipos"
  ) as HTMLSelectElement;
  const selectedTiposContainer = document.getElementById("selected-tipos");

  selectTipos.addEventListener("change", function () {
    const selectedOption = selectTipos.options[selectTipos.selectedIndex];
    const selectedTipo = selectedOption.value;

    if (selectedTipo !== "Tipo de arte") {
      addSelectedTipo(selectedTipo, selectedTiposContainer); // Chamar a função addSelectedTipo
      selectedOption.style.display = "none";
      selectedOption.disabled = true;
      selectTipos.selectedIndex = 0;
    }
  });

  function addSelectedTipo(tipo: string, container: HTMLElement | null) {
    // Adicionar container como parâmetro
    if (!container) return; // Verificar se o container é válido

    const tipoIcon = document.createElement("div");
    tipoIcon.classList.add("tipo-icon");
    tipoIcon.textContent = tipo;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "&times;"; // "&#x2715;" é o código HTML para o símbolo "X"
    removeButton.addEventListener("click", function () {
      container.removeChild(tipoIcon); // Remover do container
      const option = selectTipos.querySelector(`option[value="${tipo}"]`);
      if (option instanceof HTMLOptionElement) {
        option.style.display = "block";
        option.disabled = false;
      }
    });

    tipoIcon.appendChild(removeButton);
    container.appendChild(tipoIcon); // Adicionar ao container
  }
});

/*Senha*/
const handleSenhaInput = () => {
  const senhaInput = document.getElementById(
    "senha"
  ) as HTMLInputElement | null;
  const errorMessage = document.getElementById("error-message");
  const regexUpperCase = /[A-Z]/;
  const regexLowerCase = /[a-z]/;
  const regexNumbers = /[0-9]/;
  const regexSpecialChars = /[$&+,:;=?@#|'<>.^*()%!-]/;

  const uppercaseReq = document.getElementById("uppercase");
  const lowercaseReq = document.getElementById("lowercase");
  const numberReq = document.getElementById("number");
  const specialReq = document.getElementById("special");
  const lengthReq = document.getElementById("length");
  const successGif = document.getElementById("success-gif");
  const requirementsLabel = document.getElementById("requirements-label");

  if (
    !senhaInput ||
    !errorMessage ||
    !uppercaseReq ||
    !lowercaseReq ||
    !numberReq ||
    !specialReq ||
    !lengthReq ||
    !successGif ||
    !requirementsLabel
  ) {
    return;
  }

  const senha = senhaInput.value;

  if (senha.length >= 8) {
    lengthReq.style.display = "none";
  } else {
    lengthReq.style.display = "block";
  }

  if (regexUpperCase.test(senha)) {
    uppercaseReq.style.display = "none";
  } else {
    uppercaseReq.style.display = "block";
  }

  if (regexLowerCase.test(senha)) {
    lowercaseReq.style.display = "none";
  } else {
    lowercaseReq.style.display = "block";
  }

  if (regexNumbers.test(senha)) {
    numberReq.style.display = "none";
  } else {
    numberReq.style.display = "block";
  }

  if (regexSpecialChars.test(senha)) {
    specialReq.style.display = "none";
  } else {
    specialReq.style.display = "block";
  }

  if (
    senha.length < 8 ||
    !regexUpperCase.test(senha) ||
    !regexLowerCase.test(senha) ||
    !regexNumbers.test(senha) ||
    !regexSpecialChars.test(senha)
  ) {
    errorMessage.textContent = "A senha deve atender aos requisitos.";
    successGif.style.display = "none"; // Oculta o GIF se os requisitos não forem atendidos
    requirementsLabel.style.display = "block"; // Mostra o texto "Requisitos:" se os requisitos não forem atendidos
  } else {
    errorMessage.textContent = "";
    successGif.style.display = "inline-block"; // Mostra o GIF se todos os requisitos forem atendidos
    requirementsLabel.style.display = "none"; // Oculta o texto "Requisitos:" se todos os requisitos forem atendidos
  }
};

/*Login*/
const CreateArtist: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleArtista = async () => {
    try {
      const response = await axios.post("http://localhost:8000/artistas", {
        name,
        email,
        telephone,
        passwordRef,
      });
      console.log(response.data);
      setName("");
      setTelephone("");
      setEmail("");
      setSuccessMessage("Cadastro realizado com sucesso");
      navigate("/login");
    } catch (error) {
      setError("erro ao cadastrar usuário");
      console.error(error);
    }
  };

  useEffect(() => {
    document
      .getElementById("file-upload")
      ?.addEventListener("change", handleFileUploadChange);
    document
      .getElementById("link-rede-social")
      ?.addEventListener("input", verificarLink);
    document
      .getElementById("senha")
      ?.addEventListener("input", handleSenhaInput);

    return () => {
      document
        .getElementById("file-upload")
        ?.removeEventListener("change", handleFileUploadChange);
      document
        .getElementById("link-rede-social")
        ?.removeEventListener("input", verificarLink);
      document
        .getElementById("senha")
        ?.removeEventListener("input", handleSenhaInput);
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link rel="stylesheet" href="../css/artista.css" />
      <title>Tela Login</title>
      <div className="card">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMessage && (
          <div className="text-geen-500 mb-4">{successMessage}</div>
        )}
        <div className="actions">
          <button onClick={handleArtista} className="form-btn">
            criar conta
          </button>
          <div className="form-link">
            <input type="checkbox" id="termos-uso" name="termos-uso" />
            <label htmlFor="termos-uso">
              Aceito os{" "}
              <a
                href="https://2.bp.blogspot.com/-2D4L7sKDbC4/Vt2_j1wWxgI/AAAAAAAAAfI/R4liNaN-rMY/s1600/charge%2B1.jpg"
                target="_blank"
              >
                Termos de Uso e Acesso dos Meus Dados
              </a>
            </label>
          </div>
        </div>
        <section className="form-section" id="sign-in">
          <section className="call" id="sign-in-call">
            <h1 className="title">Criar Artista</h1>
            <div className="form">
              <div className="login-container">
                <div className="profile-section">
                  <img
                    id="profile-image"
                    src="../../public/assets/profile-dark.svg"
                    alt="Profile Picture"
                  />
                  <label htmlFor="file-upload" className="custom-file-upload">
                    <i className="fas fa-plus" />
                  </label>
                  <input id="file-upload" type="file" accept="image/*" />
                  <input
                    className="form-nick"
                    type="text"
                    placeholder="@Nick_n4m3"
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-field"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="form-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                className="form-field"
                placeholder="Telefone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <p className="mb-0 mt-4 text-center">
              <a href="./signup" className="link">
                Não quer ser artista? Clique aqui
              </a>
            </p>
          </section>
        </section>
        <section className="form-section" id="sign-up">
          <div className="form-1">
            <div className="column">
              {/* Tipo de Arte */}
              <div className="tipos">
                <div className="select-container">
                  <div className="form-group">
                    <label htmlFor="select-tipos">Tipo de Arte:</label>
                    <select id="select-tipos">
                      <option style={{ display: "none" }}>Tipo de arte</option>
                      <option value="Dança">Dança</option>
                      <option value="Cinema">Cinema</option>
                      <option value="Fotografia">Fotografia</option>
                      <option value="Arte Digital">Arte Digital</option>
                      <option value="Arte Física">Arte Física</option>
                      <option value="Design Gráfico">Design Gráfico</option>
                      <option value="Arquitetura">Arquitetura</option>
                      <option value="Poesia">Poesia</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="selected-tipos" id="selected-tipos" />
              {/* Senha */}
              <div className="form-senha">
                <div className="form-group">
                  <label htmlFor="senha">Senha:</label>
                  <input
                    className="form-box"
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    onChange={handleSenhaInput} // Chamada de função de manipulador de evento para input
                  />
                  <p id="error-message" className="error-message" />
                </div>{" "}
                <br />
                <div className="form-group">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Lembrar senha</label>
                </div>
                <div className="requirements">
                  <p id="requirements-label">Requisitos:</p>
                  <ul>
                    <li id="uppercase">Pelo menos uma letra maiúscula;</li>
                    <li id="lowercase">Pelo menos uma letra minúscula;</li>
                    <li id="number">Pelo menos um número;</li>
                    <li id="special">Pelo menos um caractere especial;</li>
                    <li id="length">No mínimo 8 caracteres;</li>
                  </ul>
                  <img
                    src="https://media.tenor.com/_NlZKqzpDPwAAAAj/emoji-like.gif"
                    id="success-gif"
                    style={{ display: "none" }}
                    alt="Requisitos atendidos"
                  />
                </div>
              </div>
            </div>
            <div className="column">
              {/* Rede Social */}
              <div className="form-group">
                <label htmlFor="rede-social">Rede Social Principal:</label>
                <select id="rede-social" name="rede-social">
                  <option value="">Selecione a rede social</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="link-rede-social">Link da Rede Social:</label>
                <input
                  className="form-box"
                  type="url"
                  id="link-rede-social"
                  name="link-rede-social"
                  placeholder="Insira o link da sua rede social"
                />
                <p id="error" className="error" /> <br />
                <button
                  className="text-white bg-darkblue hover:bg-main"
                  onClick={verificarLink}
                >
                  Verificar Link
                </button>
              </div>
              <br />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateArtist;
