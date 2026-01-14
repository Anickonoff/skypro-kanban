import styled, { css } from "styled-components";
import { StyledCategory } from "../Category/Category.styled";

const ModalRoot = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 6;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

const ModalOverlay = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 660px) {
    align-items: flex-start;
  }
`;

const ModalCard = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 630px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  padding: 40px 30px 48px;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

const ModalContent = styled.div`
  display: block;
  text-align: left;
`;

//Общие стилизованные компоненты для PopBrowse и PopNewCard, не входят в Modal.jsx
const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000;
`;

const ModalWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

const ModalForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
  }
`;

const ModalFieldBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalFormLabel = styled.label`
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

const ModalFormInput = styled.input`
  ${styledInput}
  margin: 20px 0;
`;

const ModalFormArea = styled.textarea`
  ${styledInput}
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  background-color: ${({ readOnly }) =>
    readOnly ? "#eaeef6" : "transparent"};
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

const ModalCategoriesTheme = styled(StyledCategory)`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $isDimmed }) => ($isDimmed ? 0.4 : 1)};
  cursor: pointer;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export {
  ModalRoot,
  ModalOverlay,
  ModalCard,
  ModalContent,
  ModalTitle,
  ModalWrap,
  ModalForm,
  ModalFieldBlock,
  ModalFormInput,
  ModalFormArea,
  ModalFormLabel,
  ModalCategoriesTheme,
};
