import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import NewCardPage from "./pages/NewCardPage";
import ViewCardPage from "./pages/ViewCardPage";
import SignOutPage from "./pages/SignOutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
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

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isAuth = !!user;

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage user={user} />}>
          <Route path="card/:id" element={<ViewCardPage />} />
          <Route path="card/new" element={<NewCardPage />} />
          <Route path="exit" element={<SignOutPage logout={logout} />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage setUser={setUser} />} />
      <Route path="/register" element={<SignUpPage setUser={setUser} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
