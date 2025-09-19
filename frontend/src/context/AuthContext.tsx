import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = "student" | "admin" | null;

interface AuthContextType {
  role: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);
  const navigate = useNavigate();

  const login = (selectedRole: UserRole) => setRole(selectedRole);

  const logout = () => {
    setRole(null);
    navigate("/"); // 👈 redirect to home page
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
