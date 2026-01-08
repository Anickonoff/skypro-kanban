import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import NewCardPage from "./pages/NewCardPage";
import ViewCardPage from "./pages/ViewCardpage";
import SignOutPage from "./pages/SignOutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/card/:id" element={<ViewCardPage />} />
          <Route path="/card/new" element={<NewCardPage />} />
          <Route path="/exit" element={<SignOutPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
