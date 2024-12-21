import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
