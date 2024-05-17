import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useUser } from "./userContext";

const PrivateRoute: React.FC<{ element: React.ReactNode; path: string }> = ({
  element,
  path,
}) => {
  const { isLoggedIn } = useUser();

  if (isLoggedIn === null) {
    return <p>carregando</p>;
  }

  return (
    <Routes>
      <Route
        path={path}
        element={isLoggedIn ? element : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default PrivateRoute;
