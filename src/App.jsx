import { useEffect, useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Card from "./components/Card/Card";
import Column from "./components/Column/Column";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        {loading ? <Loader /> : <Main />}
      </div>
    </>
  );
}

export default App;
