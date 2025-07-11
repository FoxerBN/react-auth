import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the hook

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Show a loading state while checking authentication
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If authenticated, show the children components. Otherwise, redirect to login.
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;