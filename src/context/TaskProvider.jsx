import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createTask, deleteTask, getTasks, updateTask } from "../services/api";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [getError, setGetError] = useState("");
  const [addError, setAddError] = useState("");
  const [editError, setEditError] = useState("");
  const { user } = useContext(AuthContext);

  const getCards = useCallback(async () => {
    if (!user) {
      return;
    }
    try {
      setGetError("");
      setLoading(true);
      const data = await getTasks({
        token: user.token,
      });
      if (data) setCards(data);
    } catch (e) {
      setGetError(e.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      setCards([]);
      setGetError("");
      setEditError("");
      setAddError("");
      return;
    }
    getCards();
  }, [user, getCards]);

  const addCard = async (task) => {
    if (!user) {
      return;
    }
    try {
      setAddError("");
      setAddLoading(true);
      const newCards = await createTask({ token: user?.token, task });
      setCards(newCards);
    } catch (e) {
      setAddError(e.message);
    } finally {
      setAddLoading(false);
    }
  };

  const updateCard = async ( task ) => {
    if (!user) {
      return;
    }
    try {
      setEditError("");
      setEditLoading(true);
      const newCards = await updateTask({ token: user?.token, task });
      setCards(newCards);
    } catch (e) {
      setEditError(e.message);
    } finally {
      setEditLoading(false);
    }
  };

  const deleteCard = async ({ id }) => {
    if (!user) {
      return;
    }
    try {
      setEditError("");
      setEditLoading(true);
      const newCards = await deleteTask({ token: user?.token, id });
      setCards(newCards);
    } catch (e) {
      setEditError(e.message);
    } finally {
      setEditLoading(false);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        cards,
        addCard,
        deleteCard,
        updateCard,
        loading,
        getError,
        addError,
        editError,
        addLoading,
        editLoading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
