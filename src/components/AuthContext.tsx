/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

// Získaj API URL z environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

interface AuthContextType {
  isAuthenticated: boolean | null;
  user: any;
  checkAuth: () => Promise<void>;
  logout: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);

  const checkAuth = async () => {
    try {
      const response = await fetch(`${API_URL}/user`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setUser(data);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = async (): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setIsAuthenticated(false);
        setUser(null);
        return true;
      } else {
        console.error('Logout failed.');
        return false;
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
      return false;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};