import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useUser } from "./userContext";

const PrivateRoute: React.FC<{ element: React.ReactNode; path: string }> = ({
  element,
  path,
}) => {
  const { user, artist } = useUser(); //remover user e artist e criar variável isLoggedIn

  const isAuthenticated = user !== null || artist !== null;

  return (
    <Routes>
      <Route
        path={path}
        element={isAuthenticated ? element : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default PrivateRoute;
