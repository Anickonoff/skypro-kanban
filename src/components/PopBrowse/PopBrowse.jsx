import Calendar from "../Calendar/Calendar";
import "../../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import Loader from "../Loader/Loader";
import { TaskContext } from "../../context/TaskContext";
import Modal from "../Modal/Modal";
import {
  BrowseBtnPrim,
  BrowseBtns,
  BrowseBtnSec,
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

const PopBrowse = () => {
  const { id } = useParams();
  const { cards, editError, editLoading } = useContext(TaskContext);
  const card = cards.find((card) => card._id == id);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  if (editLoading)
    return (
      <Modal>
        <Loader />
      </Modal>
    );
  if (editError)
    return (
      <Modal>
        <div className="error">Ошибка: {editError}</div>
      </Modal>
    );
  if (!card)
    return (
      <Modal>
        <div className="empty">Задача не найдена</div>
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
          <BrowseStatusItem>Нужно сделать</BrowseStatusItem>
        </BrowseStatusList>
      </BrowseStatus>
      <ModalWrap>
        <ModalForm id="formBrowseCard" action="#">
          <ModalFieldBlock>
            <ModalFormLabel htmlFor="textArea01">
              Описание задачи
            </ModalFormLabel>
            <ModalFormArea
              name="text"
              id="textArea01"
              readOnly
              placeholder="Введите описание задачи..."
              value={card.description}
            ></ModalFormArea>
          </ModalFieldBlock>
        </ModalForm>
        <Calendar />
      </ModalWrap>
      <BrowseBtns>
        <div>
          <BrowseBtnSec>Редактировать задачу</BrowseBtnSec>
          <BrowseBtnSec>Удалить задачу</BrowseBtnSec>
        </div>
        <div>
          <BrowseBtnPrim>Сохранить</BrowseBtnPrim>
          <BrowseBtnSec>Отменить</BrowseBtnSec>
          <BrowseBtnSec>Удалить задачу</BrowseBtnSec>
        </div>
        <BrowseBtnPrim type="button" onClick={handleClose}>
          Закрыть
        </BrowseBtnPrim>
      </BrowseBtns>
    </Modal>
  );
};

export default PopBrowse;
