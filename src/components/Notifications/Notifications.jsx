import { useContext, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { TaskContext } from "../../context/TaskContext";
import { useTheme } from "styled-components";

const Notifications = () => {
  const fullTheme = useTheme();
  const { theme } = useContext(ThemeModeContext);
  const {
    addError,
    editError,
    deleteError,
    addLoading,
    editLoading,
    deleteLoading,
  } = useContext(TaskContext);
  const toastIdAdd = useRef(null);
  const toastIdEdit = useRef(null);
  const toastIdDelete = useRef(null);
  useEffect(() => {
    if (addLoading) {
      toastIdAdd.current = toast.info("Добавление задачи...", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        icon: false,
      });
    } else {
      addError
        ? toast.update(toastIdAdd.current, {
            render: `Ошибка при добавлении задачи: ${addError}`,
            type: "error",
            hideProgressBar: false,
            autoClose: 3000,
            icon: true,
          })
        : toast.update(toastIdAdd.current, {
            render: "Задача успешно добавлена!",
            type: "success",
            hideProgressBar: false,
            autoClose: 3000,
            icon: true,
          });
    }
  }, [addLoading, addError]);

  useEffect(() => {
    if (editLoading) {
      toastIdEdit.current = toast.info("Обновление задачи...", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        icon: false,
      });
    } else {
      editError
        ? toast.update(toastIdEdit.current, {
            render: `Ошибка при обновлении задачи: ${editError}`,
            type: "error",
            hideProgressBar: false,
            autoClose: 3000,
            icon: true,
          })
        : toast.update(toastIdEdit.current, {
            render: "Задача успешно обновлена!",
            type: "success",
            hideProgressBar: false,
            autoClose: 3000,
            icon: true,
          });
    }
  }, [editLoading, editError]);
  useEffect(() => {
    if (deleteLoading) {
      toastIdDelete.current = toast.info("Удаление задачи...", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        icon: false,
      });
    } else {
      deleteError
        ? toast.update(toastIdDelete.current, {
            render: `Ошибка при удалении задачи: ${deleteError}`,
            type: "error",
            hideProgressBar: false,
            autoClose: 3000,
            icon: true,
          })
        : toast.update(toastIdDelete.current, {
            render: "Задача успешно удалена!",
            type: "success",
            hideProgressBar: false,
            autoClose: 3000,
            icon: true,
          });
    }
  }, [deleteLoading, deleteError]);

  return (
    <ToastContainer
      position="bottom-right"
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme={theme}
      toastStyle={{
        backgroundColor: fullTheme.colors.background.surface,
      }}
    />
  );
};

export default Notifications;
