import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Loader from "./components/Loader/Loader";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const [addTask, setAddTask] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const openExitPopup = () => setExit(true);
  const closeExitPopup = () => setExit(false);
  const openAddTaskPopup = () => setAddTask(true);
  const closeAddTaskPopup = () => setAddTask(false);

  return (
    <Wrapper>
      {exit && <PopExit onClose={closeExitPopup} />}
      {addTask && <PopNewCard onClose={closeAddTaskPopup} />}
      {showTask && <PopBrowse />}
      <Header onExitClick={openExitPopup} onAddTaskClick={openAddTaskPopup} />
      {loading ? <Loader /> : <Main />}
    </Wrapper>
  );
}

export default App;
