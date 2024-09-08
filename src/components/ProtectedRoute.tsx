// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Asegúrate de que el hook useAuth esté configurado correctamente

interface ProtectedRouteProps {
  component: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const { isAuthenticated } = useAuth(); // Asegúrate de que useAuth proporcione la información de autenticación

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return component;
};

export default ProtectedRoute;
