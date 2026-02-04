import Calendar from "../Calendar/Calendar";
import "../../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { TaskContext } from "../../context/TaskContext";
import Modal from "../Modal/Modal";
import {
  BrowseBtnPrim,
  BrowseBtns,
  BrowseBtnSec,
  BrowseFuncBtns,
  BrowseHeader,
  BrowseStatus,
  BrowseStatusItem,
  BrowseStatusList,
  BrowseTtl,
} from "./PopBrowse.styled";
import {
  ModalCategoriesTheme,
  ModalFieldBlock,
  ModalForm,
  ModalFormArea,
  ModalFormLabel,
  ModalWrap,
} from "../Modal/Modal.styled";
import { columns, columnsRu } from "../../theme/Categories";

const PopBrowse = () => {
  const { id } = useParams();
  const {
    cards,
    loading,
    editError,
    editLoading,
    deleteError,
    deleteLoading,
    updateCard,
    deleteCard,
  } = useContext(TaskContext);
  const card = cards.find((card) => card._id === id);
  const navigate = useNavigate();
  const [taskDate, setTaskDate] = useState();
  const [isEditor, setIsEditor] = useState(false);
  const [newCard, setNewCard] = useState({});
  const [snapshot, setSnapshot] = useState({});
  const [operation, setOperation] = useState(null);

  useEffect(() => {
    if (card) {
      setTaskDate(new Date(card.date));
      setNewCard({
        title: card.title,
        topic: card.topic,
        _id: card._id,
        status: card.status,
        description: card.description,
      });
    }
  }, [card]);

  //переход в режим редактирование, сохранение снимка данных
  const handleEdit = () => {
    setIsEditor(true);
    setSnapshot({
      status: newCard.status,
      description: newCard.description,
      date: taskDate.toISOString(),
      _id: newCard._id,
      title: newCard.title,
      topic: newCard.topic,
    });
  };

  // отслеживание изменения описания
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });
  };

  // отслеживание изменения статуса
  const handleStatusClick = (newStatus) => {
    setNewCard({
      ...newCard,
      status: newStatus,
    });
  };

  // обработка отправки формы
  const handleSubmit = async () => {
    setOperation("edit");
    await updateCard({
      ...newCard,
      date: taskDate.toISOString(),
      _id: card._id,
    });
  };

  // выход из режима редактирования с откатом введённых данных
  const handleCancel = () => {
    setNewCard({
      status: snapshot.status,
      description: snapshot.description,
      _id: snapshot._id,
      title: snapshot.title,
      topic: snapshot.topic,
    });
    setIsEditor(false);
    setTaskDate(new Date(snapshot.date));
  };

  const handleClose = () => {
    navigate("/");
  };

  // удаление карточки задачи
  const handleDelete = async () => {
    if (window.confirm("Вы уверены, что хотите удалить задачу?")) {
      setOperation("delete");
      await deleteCard(card._id);
    }
  };

  // закрытие модального окна после успешного завершения операции редактирования или удаления
  useEffect(() => {
    if (operation === "edit" && !editLoading && editError === "") {
      navigate("/");
    }
    if (operation === "delete" && !deleteLoading && deleteError === "") {
      navigate("/");
    }
  }, [editLoading, editError, operation, navigate, deleteLoading, deleteError]);

  if (loading)
    return (
      <Modal>
        <Loader />
      </Modal>
    );

  if (!card)
    return (
      <Modal>
        <div className="empty">Задача не найдена</div>
        <BrowseBtnPrim type="button" onClick={handleClose}>
          Закрыть
        </BrowseBtnPrim>
      </Modal>
    );

  return (
    <Modal>
      <BrowseHeader>
        <BrowseTtl>{card.title}</BrowseTtl>
        <ModalCategoriesTheme key={card.topic} $category={card.topic}>
          <p>{card.topic}</p>
        </ModalCategoriesTheme>
      </BrowseHeader>
      <BrowseStatus>
        <p>Статус</p>
        <BrowseStatusList>
          {!isEditor ? (
            <BrowseStatusItem $active="true">{newCard.status}</BrowseStatusItem>
          ) : (
            columns.map((status) => (
              <BrowseStatusItem
                key={status}
                $active={
                  newCard.status.toLowerCase() === status.toLowerCase() ||
                  newCard.status.toLowerCase() ===
                    columnsRu[status].toLowerCase()
                }
                $isButton={true}
                onClick={() => {
                  handleStatusClick(columnsRu[status]);
                }}
              >
                {columnsRu[status]}
              </BrowseStatusItem>
            ))
          )}
        </BrowseStatusList>
      </BrowseStatus>
      <ModalWrap>
        <ModalForm id="formBrowseCard" action="#">
          <ModalFieldBlock>
            <ModalFormLabel htmlFor="description">
              Описание задачи
            </ModalFormLabel>
            <ModalFormArea
              name="description"
              id="description"
              readOnly={!isEditor}
              placeholder="Введите описание задачи..."
              value={newCard.description}
              onChange={handleChange}
            ></ModalFormArea>
          </ModalFieldBlock>
        </ModalForm>
        <Calendar
          taskDate={taskDate}
          setTaskDate={setTaskDate}
          readOnly={!isEditor || editLoading || deleteLoading}
        />
      </ModalWrap>
      <BrowseBtns>
        <BrowseFuncBtns>
          {isEditor ? (
            <>
              <BrowseBtnPrim
                onClick={handleSubmit}
                disabled={editLoading || deleteLoading}
              >
                Сохранить
              </BrowseBtnPrim>
              <BrowseBtnSec onClick={handleCancel}>Отменить</BrowseBtnSec>
            </>
          ) : (
            <BrowseBtnSec onClick={handleEdit}>
              Редактировать задачу
            </BrowseBtnSec>
          )}
          <BrowseBtnSec
            onClick={handleDelete}
            disabled={deleteLoading || editLoading}
          >
            Удалить задачу
          </BrowseBtnSec>
        </BrowseFuncBtns>
        <BrowseBtnPrim type="button" onClick={handleClose}>
          Закрыть
        </BrowseBtnPrim>
      </BrowseBtns>
    </Modal>
  );
};

export default PopBrowse;
