import AuthWindow from "../components/AuthWindow/AuthWindow";

const SignUpPage = ({ setUser }) => {
  return <AuthWindow setUser={setUser} isSignUp={true} />;
};
export default SignUpPage;
