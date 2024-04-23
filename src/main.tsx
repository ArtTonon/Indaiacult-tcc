import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import Layout from "./layout.tsx";
import { BrowserRouter, Routes, Route, LinkProps } from "react-router-dom";
import LoginPage from "./pages/login.tsx";
import SignUpPage from "./pages/signup.tsx";
import ArtistasPage from "./pages/artists.tsx";
import ObrasPage from "./pages/obras.tsx";
import SobrePage from "./pages/sobre.tsx";
import LandingPage from "./pages/landing.tsx";
import { ThemeProvider } from "./context.tsx";
import ArtistDetailstPage from "./pages/atistsdetail.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} path="/a" />
            <Route element={<LandingPage />} path="/" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignUpPage />} path="/cadastro" />
            <Route element={<ArtistasPage />} path="/artist" />
            <Route element={<ObrasPage />} path="/obras" />
            <Route element={<SobrePage />} path="/sobre" />
            <Route element={<ArtistDetailstPage />} path="/artist:id" />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
