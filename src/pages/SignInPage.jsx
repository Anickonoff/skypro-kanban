import AuthWindow from "../components/AuthWindow/AuthWindow";

const SignInPage = ({ setIsAuth }) => {
  return <AuthWindow setIsAuth={setIsAuth} isSignUp={false} />;
};

export default SignInPage;
