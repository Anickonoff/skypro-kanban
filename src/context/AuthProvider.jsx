import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch {
        localStorage.removeItem("user");
        return null;
      }
    } else {
      return null;
    }
  });

  const updateUserData = (user) => {
    setUser(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

  const login = (user) => {
    updateUserData(user);
    return true;
  };

  const logout = () => {
    updateUserData(null);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
