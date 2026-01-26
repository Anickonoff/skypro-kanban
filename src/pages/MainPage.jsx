import { Outlet } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const MainPage = () => {


  return (
    <Wrapper>
      <Header />
      <Main />
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
