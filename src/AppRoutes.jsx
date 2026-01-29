import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import NewCardPage from "./pages/NewCardPage";
import ViewCardPage from "./pages/ViewCardPage";
import SignOutPage from "./pages/SignOutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CategoriesPage from "./pages/CategoriesPage";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<ViewCardPage />} />
          <Route path="card/new" element={<NewCardPage />} />
          <Route path="exit" element={<SignOutPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
