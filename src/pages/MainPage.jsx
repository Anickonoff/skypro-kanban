import { Outlet } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";
import { getTasks } from "../services/api";
import { useCallback, useEffect, useState } from "react";

const MainPage = ({user}) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  const getCards = useCallback(async () => {
    if (!user) {
      return;
    }
    try {
      setError("");
      setLoading(true);
      const data = await getTasks({
        // token: "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k",
        token: user.token,
      });
      if (data) setCards(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <Wrapper>
      <Header user={user} />
      {loading ? <Loader /> : <Main cards={cards} error={error} />}
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
