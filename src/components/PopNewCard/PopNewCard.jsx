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
import { categoryMap } from "../../theme/Categories";
import { useState } from "react";
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

const PopNewCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <Modal>
      <NewCardTtl>Создание задачи</NewCardTtl>
      <NewCardClose to="/">&#10006;</NewCardClose>
      <ModalWrap>
        <ModalForm id="formNewCard" action="#">
          <ModalFieldBlock>
            <ModalFormLabel htmlFor="formTitle">Название задачи</ModalFormLabel>
            <ModalFormInput
              type="text"
              name="name"
              id="formTitle"
              placeholder="Введите название задачи..."
              autoFocus
            />
          </ModalFieldBlock>
          <ModalFieldBlock>
            <ModalFormLabel htmlFor="textArea">Описание задачи</ModalFormLabel>
            <ModalFormArea
              name="text"
              id="textArea"
              placeholder="Введите описание задачи..."
            ></ModalFormArea>
          </ModalFieldBlock>
        </ModalForm>
        <Calendar />
      </ModalWrap>
      <NewCardCategories>
        <NewCardCategoriesTtl>Категория</NewCardCategoriesTtl>
        <NewCardCategoriesThemes>
          {Object.keys(categoryMap).map((key) => (
            <ModalCategoriesTheme
              key={key}
              $category={key}
              $isDimmed={selectedCategory && selectedCategory !== key}
              onClick={() => setSelectedCategory(key)}
            >
              <p>{key}</p>
            </ModalCategoriesTheme>
          ))}
        </NewCardCategoriesThemes>
      </NewCardCategories>
      <NewCardFormBtn id="btnCreate">Создать задачу</NewCardFormBtn>
    </Modal>
  );
};

export default PopNewCard;
