import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Role = 'gerente' | 'operario';

interface User {
  name: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('bizlens_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('bizlens_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('bizlens_user');
    }
  }, [user]);

  const login = (name: string, role: Role) => {
    setUser({ name, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
