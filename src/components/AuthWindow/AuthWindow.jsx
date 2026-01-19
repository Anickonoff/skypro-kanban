import { Link, useNavigate } from "react-router-dom";
import {
  AuthBlock,
  AuthBtn,
  AuthError,
  AuthFooter,
  AuthForm,
  AuthInput,
  AuthModal,
  AuthTitle,
} from "./AuthWindow.styled";
import { useContext, useState } from "react";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";

const AuthWindow = ({ isSignUp }) => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isSignUp && formData.name.trim() === "") {
      newErrors.name = true;
      isValid = false;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
    }
    if (formData.login === "") {
      newErrors.login = true;
      isValid = false;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      } else if (!emailRegex.test(formData.login)) {
        newErrors.login = true;
        isValid = false;
        setError(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
        );
    }
    if (formData.password.trim() === "") {
      newErrors.password = true;
      isValid = false;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp({
            name: formData.name,
            login: formData.login,
            password: formData.password,
          });

      if (data) {
        const success = login(data);
        if (success) navigate("/");
      }
    } catch (err) {
      if (err.message === "Неверный логин или пароль") {
        setError(
          "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
        );
        return;
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <AuthModal>
      <AuthBlock>
        <AuthTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthTitle>
        <AuthForm id="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <AuthInput
              type="text"
              name="name"
              id="formname"
              placeholder="Имя"
              onChange={handleChange}
              value={formData.name}
              $error={errors.name}
            />
          )}
          <AuthInput
            type="text"
            name="login"
            id="formlogin"
            placeholder="Эл. почта"
            onChange={handleChange}
            value={formData.login}
            $error={errors.login}
          />
          <AuthInput
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
            onChange={handleChange}
            value={formData.password}
            $error={errors.password}
          />
          {error && <AuthError>{error}</AuthError>}
          <AuthBtn type="submit" disabled={error}>
            {isSignUp ? "Зарегистрироваться" : "Войти"}
          </AuthBtn>
          <AuthFooter>
            {isSignUp ? "Уже есть аккаунт? " : "Нужно зарегистрироваться? "}
            {isSignUp ? (
              <Link to="/login">Войдите здесь</Link>
            ) : (
              <Link to="/register">Регистрируйтесь здесь</Link>
            )}
          </AuthFooter>
        </AuthForm>
      </AuthBlock>
    </AuthModal>
  );
};
export default AuthWindow;
