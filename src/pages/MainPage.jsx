import { Outlet } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

const MainPage = () => {
  const { loading } = useContext(TaskContext);

  return (
    <Wrapper>
      <Header />
      {loading ? <Loader /> : <Main />}
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
