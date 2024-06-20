import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import Layout from "./layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login.tsx";
import SignUpPage from "./pages/signup.tsx";
import SenhaPage from "./pages/senha.tsx";
import CriarPage from "./pages/criar.tsx";
import ArtistasPage from "./pages/artists.tsx";
import ObrasPage from "./pages/obras.tsx";
import SobrePage from "./pages/sobre.tsx";
import LandingPage from "./pages/landing.tsx";
import { ThemeProvider } from "./context.tsx";
import ArtistDetailstPage from "./pages/atistsdetail.jsx";
import SobreDetailPage from "./pages/sobredetail.tsx";
import { UserProvider } from "./userContext.tsx";
import PrivateRoute from "./privateRoute.tsx";
import CreateArtist from "./pages/createartist.tsx";
import SignUpArtist from "./pages/signUpArtist.tsx";
import ObrasDetailsPage from "./pages/obradetails.tsx";
import ProfilePageAdm from "./pages/profilepageadm.tsx";
import CreateObraPage from "./pages/createobra.tsx";
import NotFound from "./components/NotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Routes>
            <Route
            path="/*"
              element={
                <Layout>
                  <PrivateRoute element={<ArtistasPage />} path="/artists" />
                  <PrivateRoute element={<ObrasPage />} path="/obras" />
                  <PrivateRoute
                    element={<SobreDetailPage />}
                    path="/sobre:id"
                  />
                  <PrivateRoute
                    element={<CreateObraPage />}
                    path="/criar-obra"
                  />
                  <PrivateRoute
                    element={<ArtistDetailstPage />}
                    path="/artist/:id"
                  />
                  <PrivateRoute
                    element={<ObrasDetailsPage />}
                    path="/obra/:id"
                  />
                  <PrivateRoute element={<SobrePage />} path={"/sobre"} />
                  <PrivateRoute
                    element={<SobreDetailPage />}
                    path={"/sobre/:id"}
                  />
                  <PrivateRoute
                    element={<ProfilePageAdm />}
                    path={"/editar-perfil/artistis/:id"}
                  />
                </Layout>
              }
            />
            <Route element={<CreateArtist />} path="/create" />
            <Route element={<SignUpArtist />} path="/cadastro-artista" />
            <Route element={<SenhaPage />} path="/senha" />
            <Route element={<CriarPage />} path="/criar" />
            {/* <Route element={<NotFound />} path="/*" /> */}
            <Route element={<LandingPage />} path="/" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignUpPage />} path="/cadastro" />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
