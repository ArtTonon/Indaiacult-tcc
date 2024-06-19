import React from "react";
import { useState } from "react";
import "../css/login.css";
import { MdOutlineAlternateEmail, MdOutlineLock } from "react-icons/md";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaRegUser } from "react-icons/fa6";
import { useUser } from "../userContext";
import { signUpArtista } from "../services/ArtistService";
import { GoPencil } from "react-icons/go";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import SocialLinks from "../components/SocialLinks";

const SignUpArtist = () => {
  const { keepLoggedIn } = useUser();
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [banner, setBanner] = useState<File | undefined>(undefined);
  const [bannerUrl, setBannerUrl] = useState("");
  const [redessociais, setRedessociais] = useState([""]);
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("As senhas não coincidem");
        return;
      }

      if (!image || !banner) {
        return;
      }
      const imageRef = ref(storage, `image/${email}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      const bannerRef = ref(storage, `banner/${email}`);
      await uploadBytes(bannerRef, banner);
      const downloadUrl = await getDownloadURL(bannerRef);

      const error = await signUpArtista(
        name,
        email,
        password,
        genre,
        description,
        [facebook, instagram],
        imageUrl,
        downloadUrl
      );

      if (error) {
        setError(error);
        return;
      }

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setGenre("");
      setSuccessMessage("Cadastro realizado com sucesso");
      keepLoggedIn();
      navigate("/artists");
    } catch (error) {
      console.error(error);
      setError("Ocorreu um erro durante o cadastro");
    }
  };

  return (
    <div className="">
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
      <form
        onSubmit={handleSignUp}
        className="flex gap-32 items-center justify-center"
      >
        <section className="flex flex-col items-center justify-center">
          <div className="rounded-xl relative bg-white dark:bg-diffBlack dark:text-white border-highlight dark:border-highlightDark border-4 px-20 py-8 flex flex-col items-center gap-8">
            <h1 className="font-semibold font-montserrat text-xl lg:text-4xl">
              Bem vindo ao <span className="text-main font-bold">Indaia</span>
              <span className="text-darkblue dark:text-lightblue font-bold">
                Cult.
              </span>
            </h1>

            <div className="flex flex-col gap-4 text-xl w-full">
              <label>
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
              <label>
                <span className="font-montserrat">E-mail</span>
                <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                  <MdOutlineAlternateEmail className="text-darkblue dark:text-lightblue text-2xl" />
                  <input
                    type="text"
                    placeholder="Insira seu e-mail"
                    className="font-montserrat bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>
              <label>
                Que tipo de arte você produz?
                <div className="p-3">
                  <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="py-2 px-3 text-black border-2 border-darkblue dark:border-lightblue rounded-lg"
                  >
                    <option value="">Escolha uma opção</option>
                    <option value="Música">Música</option>
                    <option value="Escultura">Escultura</option>
                    <option value="Dança">Dança</option>
                    <option value="Poesia">Poesia</option>
                  </select>
                </div>
              </label>
              <label>
                <span className="font-montserrat">Senha</span>
                <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                  <MdOutlineLock className="text-darkblue dark:text-lightblue text-2xl" />
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
                <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                  <MdOutlineLock className="text-darkblue dark:text-lightblue text-2xl" />
                  <input
                    type="password"
                    placeholder="Confirme sua senha"
                    className="font-montserrat bg-transparent"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <Link to="/login" className="text-xl underline">
              Já possui uma conta?
            </Link>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="rounded-xl relative bg-white dark:bg-diffBlack dark:text-white border-highlight dark:border-highlightDark border-4 px-20 py-8 flex flex-col items-center gap-8">
            <h1 className="font-semibold font-montserrat text-xl lg:text-4xl">
              Informações adicionais
            </h1>
            <div className="flex flex-col gap-4 text-xl w-full">
              <span>Foto de perfil</span>
              <input
                type="file"
                id="ArtistaImagem"
                className="hidden"
                onChange={(e) => {
                  e.target.files && setImage(e.target.files[0]);
                }}
              />
              <div className="flex items-end -space-x-8">
                <img
                  src={image ? URL.createObjectURL(image) : "/default.png"}
                  alt=""
                  className="rounded-full border-4 border-darkblue object-cover dark:border-lightblue w-24 h-24"
                />

                <label
                  htmlFor="ArtistaImagem"
                  className="flex cursor-pointer items-center justify-center rounded-full px-3 py-3 w-max h-max bg-darkblue dark:bg-lightblue"
                >
                  <GoPencil className="fill-white" />
                </label>
              </div>
              <span>Foto para banner</span>
              <input
                type="file"
                id="ArtistaBannerImagem"
                className="hidden"
                onChange={(e) => {
                  e.target.files && setBanner(e.target.files[0]);
                }}
              />
              <div className="flex items-end -space-x-8">
                <img
                  src={banner ? URL.createObjectURL(banner) : "/default.png"}
                  alt=""
                  className="rounded-lg border-4 border-darkblue dark:border-lightblue w-full object-cover h-16 md:h-32"
                />

                <label
                  htmlFor="ArtistaBannerImagem"
                  className="flex cursor-pointer items-center justify-center rounded-full px-3 py-3 w-max h-max bg-darkblue dark:bg-lightblue"
                >
                  <GoPencil className="fill-white" />
                </label>
              </div>
              <label htmlFor="">
                <span className="">Descrição</span>
                <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full min-h-24 blur-none resize-none"
                  />
                </div>
              </label>
              <label htmlFor="">
                <span className="font-montserrat dark:text-white">
                  Redes sociais
                </span>
                <div className="flex gap-4">
                  <div className="flex flex-row items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                    <FaInstagram className="text-darkblue dark:text-lightblue text-2xl" />
                    <input
                      type="text"
                      placeholder="Insira o link"
                      className="font-montserrat bg-transparent"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                    <FaFacebook className="text-darkblue dark:text-lightblue text-2xl" />
                    <input
                      type="text"
                      placeholder="Insira o link"
                      className="font-montserrat bg-transparent"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </div>
                </div>
              </label>
              <button
                type="submit"
                className="py-2 font-bold w-full rounded-lg bg-darkblue dark:bg-lightblue text-white"
              >
                Cadastrar Informações
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default SignUpArtist;
