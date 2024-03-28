import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import Layout from "./layout.tsx";
import { BrowserRouter, Routes, Route, LinkProps } from "react-router-dom";
import Landing from "./pages/landing.tsx";
import Login from "./pages/login.tsx";
import SignUp from "./pages/signup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/a" />
          <Route element={<Landing />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/cadastro" />
        </Routes>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);
