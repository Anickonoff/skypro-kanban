import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import NewCardPage from "./pages/NewCardPage";
import ViewCardPage from "./pages/ViewCardPage";
import SignOutPage from "./pages/SignOutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";
import Loader from "./components/Loader/Loader";

const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const [booting, setBooting] = useState(true);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        localStorage.removeItem("user");
      }
    }
    setBooting(false);
  }, []);
  const isAuth = !!user;
  console.log(user);
  if (booting) {
    return <Loader />;
  }

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
