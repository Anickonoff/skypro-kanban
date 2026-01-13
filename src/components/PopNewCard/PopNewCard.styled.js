import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { StyledCategory } from "../Category/Category.styled";

const StyledPopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

const NewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const NewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

const NewCardContent = styled.div`
  display: block;
  text-align: left;
`;

const NewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

const NewCardClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

const NewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

const NewCardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewCardFormLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const styledInput = css`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  &::-moz-placeholder,
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

const NewCardFormInput = styled.input`
  ${styledInput}
  margin: 20px 0;
`;

const NewCardFormArea = styled.textarea`
  ${styledInput}
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

const NewCardFormBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  &:hover {
    background-color: #33399b;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

const NewCardCategories = styled.div`
  margin-bottom: 20px;
`;

const NewCardCategoriesTtl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const NewCardCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const NewCardCategoriesTheme = styled(StyledCategory)`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  /* opacity: 0.4; */
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export {
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
};
