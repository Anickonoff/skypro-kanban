import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const openExitPopup = () => setExit(true);
  const closeExitPopup = () => setExit(false);

  return (
    <>
      <div className="wrapper">
        {exit && <PopExit onClose={closeExitPopup} />}
        <PopNewCard />
        <PopBrowse />
        <Header onExitClick={openExitPopup} />
        {loading ? <Loader /> : <Main />}
      </div>
    </>
  );
}

export default App;
