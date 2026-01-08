import { Link, useNavigate } from "react-router-dom";
import {
  AuthBlock,
  AuthBtn,
  //   AuthContainer,
  AuthFooter,
  AuthForm,
  AuthInput,
  AuthModal,
  AuthTitle,
  //   AuthWrapper,
} from "./AuthWindow.styled";

const AuthWindow = ({ setIsAuth, isSignUp }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    // <AuthWrapper>
    //   <AuthContainer>
    <AuthModal>
      <AuthBlock>
        <AuthTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthTitle>
        <AuthForm id="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <AuthInput
              type="text"
              name="first-name"
              id="formname"
              placeholder="Имя"
            />
          )}
          <AuthInput
            type="email"
            name="login"
            id="formlogin"
            placeholder="Эл. почта"
          />
          <AuthInput
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
          />
          <AuthBtn type="submit">
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
    //   </AuthContainer>
    // </AuthWrapper>
  );
};
export default AuthWindow;
