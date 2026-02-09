import { Outlet } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Notifications from "../components/Notifications/Notifications";

const MainPage = () => {


  return (
    <Wrapper>
      <Header />
      <Main />
      <Outlet />
      <Notifications />
    </Wrapper>
    
  );
};

export default MainPage;
