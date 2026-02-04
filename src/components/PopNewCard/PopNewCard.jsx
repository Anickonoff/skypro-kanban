import Calendar from "../Calendar/Calendar";
import "../../App.css";
import {
  NewCardTtl,
  NewCardClose,
  NewCardFormBtn,
  NewCardCategories,
  NewCardCategoriesTtl,
  NewCardCategoriesThemes,
} from "./PopNewCard.styled";
import { useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import {
  ModalCategoriesTheme,
  ModalFieldBlock,
  ModalForm,
  ModalFormArea,
  ModalFormInput,
  ModalFormLabel,
  ModalWrap,
} from "../Modal/Modal.styled";
import { TaskContext } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

const PopNewCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const { addCard, addError, addLoading } = useContext(TaskContext);
  const [newCard, setNewCard] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    await addCard({
      ...newCard,
      date: taskDate?.toISOString(),
      topic: theme.colors.categories[selectedCategory]?.label,
    });
  };

  useEffect(() => {
    if (isSubmitted && !addLoading && addError === "") {
      navigate("/");
    }
  }, [addLoading, addError, isSubmitted, navigate]);

  return (
    <Modal>
      <NewCardTtl>Создание задачи</NewCardTtl>
      <NewCardClose to="/">&#10006;</NewCardClose>
      <ModalWrap>
        <ModalForm>
          <ModalFieldBlock>
            <ModalFormLabel htmlFor="title">Название задачи</ModalFormLabel>
            <ModalFormInput
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={newCard.title || ""}
              placeholder="Введите название задачи..."
              autoFocus
            />
          </ModalFieldBlock>
          <ModalFieldBlock>
            <ModalFormLabel htmlFor="description">
              Описание задачи
            </ModalFormLabel>
            <ModalFormArea
              name="description"
              onChange={handleChange}
              value={newCard.description || ""}
              id="description"
              placeholder="Введите описание задачи..."
            ></ModalFormArea>
          </ModalFieldBlock>
        </ModalForm>
        <Calendar taskDate={taskDate} setTaskDate={setTaskDate} />
      </ModalWrap>
      <NewCardCategories>
        <NewCardCategoriesTtl>Категория</NewCardCategoriesTtl>
        <NewCardCategoriesThemes>
          {Object.keys(theme.colors.categories).map((key) => (
            <ModalCategoriesTheme
              key={key}
              $category={key}
              $isDimmed={selectedCategory && selectedCategory !== key}
              onClick={() => setSelectedCategory(key)}
            >
              <p>{theme.colors.categories[key].label}</p>
            </ModalCategoriesTheme>
          ))}
        </NewCardCategoriesThemes>
      </NewCardCategories>
      <NewCardFormBtn
        type="button"
        onClick={handleSubmit}
        disabled={addLoading}
        $loading={addLoading}
      >
        Создать задачу
      </NewCardFormBtn>
    </Modal>
  );
};

export default PopNewCard;
