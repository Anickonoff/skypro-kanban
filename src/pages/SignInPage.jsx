import AuthWindow from "../components/AuthWindow/AuthWindow";

const SignInPage = ({ setUser }) => {
  return <AuthWindow setUser={setUser} isSignUp={false} />;
};

export default SignInPage;
