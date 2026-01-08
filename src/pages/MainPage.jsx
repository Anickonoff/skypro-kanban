import { Outlet } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";

const MainPage = ({ loading }) => {
  return (
    <Wrapper>
      <Header />
      {loading ? <Loader /> : <Main />}
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
