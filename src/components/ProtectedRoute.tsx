import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

interface ProtectedRouteProps {
  component: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return component;
};

export default ProtectedRoute;
