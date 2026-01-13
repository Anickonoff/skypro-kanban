import Calendar from "../Calendar/Calendar";
import "../../App.css";
import {
  StyledPopNewCard,
  NewCardContainer,
  NewCardBlock,
  NewCardContent,
  NewCardTtl,
  NewCardClose,
  NewCardWrap,
  NewCardForm,
  NewCardFormBlock,
  NewCardFormLabel,
  NewCardFormInput,
  NewCardFormArea,
  NewCardFormBtn,
  NewCardCategories,
  NewCardCategoriesTtl,
  NewCardCategoriesThemes,
  NewCardCategoriesTheme,
} from "./PopNewCard.styled";
import { categoryMap } from "../../theme/Categories";

const PopNewCard = () => {
  return (
    <StyledPopNewCard>
      <NewCardContainer>
        <NewCardBlock>
          <NewCardContent>
            <NewCardTtl>Создание задачи</NewCardTtl>
            <NewCardClose to="/">&#10006;</NewCardClose>
            <NewCardWrap>
              <NewCardForm id="formNewCard" action="#">
                <NewCardFormBlock>
                  <NewCardFormLabel htmlFor="formTitle">
                    Название задачи
                  </NewCardFormLabel>
                  <NewCardFormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </NewCardFormBlock>
                <NewCardFormBlock>
                  <NewCardFormLabel htmlFor="textArea">
                    Описание задачи
                  </NewCardFormLabel>
                  <NewCardFormArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></NewCardFormArea>
                </NewCardFormBlock>
              </NewCardForm>
              <Calendar />
            </NewCardWrap>
            <NewCardCategories>
              <NewCardCategoriesTtl>Категория</NewCardCategoriesTtl>
              <NewCardCategoriesThemes>
                {Object.keys(categoryMap).map((key) => (
                  <NewCardCategoriesTheme key={key} $category={key}>
                    <p>{key}</p>
                  </NewCardCategoriesTheme>
                ))}
              </NewCardCategoriesThemes>
            </NewCardCategories>
            <NewCardFormBtn id="btnCreate">Создать задачу</NewCardFormBtn>
          </NewCardContent>
        </NewCardBlock>
      </NewCardContainer>
    </StyledPopNewCard>
  );
};

export default PopNewCard;
