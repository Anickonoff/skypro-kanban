import styled, { css, keyframes } from "styled-components";
import {
  ModalCategoriesTheme,
  ModalFormSelect,
  ModalTitle,
} from "../Modal/Modal.styled";
import { BtnPrim, BtnSec } from "../Button/Button.styled";

const CategoriesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const CategoriesTitle = styled(ModalTitle)`
  margin-bottom: 20px;
`;

const CategoriesListTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: 600;
  line-height: 1;
`;

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  margin-bottom: 20px;
`;

const CategoriesBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const CategoriesBtnSec = styled(BtnSec)`
  padding: 0 10px;
`;

const CategoriesBtnPrim = styled(BtnPrim)`
  padding: 0 10px;
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 251, 16, 0.7);
  }
  35% {
    box-shadow: 0 0 0 5px rgba(255, 251, 16, 0.43);
  }
  50% {
    box-shadow: 0 0 0 0 rgba(255, 251, 16, 0.24);
  }
  51% {
    box-shadow: 0 0 0 0 rgba(16, 80, 255, 0.7);
  }
  85% {
    box-shadow: 0 0 0 5px rgba(16, 80, 255, 0.43);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 80, 255, 0.24);
  }
`;

const CategoriesEl = styled(ModalCategoriesTheme)`
  ${({ $hasError }) =>
    $hasError &&
    css`
      animation: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border.error};
    `}
  ${({ $editing }) =>
    $editing &&
    css`
      animation: ${pulseAnimation} 1s ease-in-out infinite;
    `}
`;

const CategoriesSelect = styled(ModalFormSelect)`
  width: calc(100% - 34px);
`;

const CategoriesInputWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const CategoriesCheck = styled.span`
  position: relative;
  display: inline-block;

  &::before {
    content: "${({ $error }) => ($error ? "!" : "✓")}";
    display: block;
    width: 24px;
    height: 24px;
    color: ${({ $error, theme }) =>
      $error ? theme.colors.text.error : theme.colors.text.success};
    text-align: center;
    font-weight: bold;
    border: 1px solid
      ${({ $error, theme }) =>
        $error ? theme.colors.border.error : theme.colors.border.success};
    border-radius: 50%;
  }
  ${({ $error }) =>
    $error &&
    css`
      &:hover::after,
      &:focus::after,
      &:active::after {
        content: "${({ $message }) => $message}";
        color: red;
        position: absolute;
        top: -30px;
        right: 0;
        white-space: nowrap;
        font-size: ${({ theme }) => theme.fonts.size.xs};
        background-color: ${({ theme }) => theme.colors.background.surface};
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.border.error};
      }
    `}
`;

const CategoriesImportLabel = styled.label`
  display: inline-block;
  padding: 0px 10px;
  height: 30px;
  line-height: 30px;
  background-color: ${({ theme }) => theme.colors.button.bgSecondary};
  color: ${({ theme }) => theme.colors.button.textSecondary};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.button.borderSecondary};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hoverSecondary};
    color: ${({ theme }) => theme.colors.button.textPrimary};
  }
`;

const CategoriesImportInput = styled.input`
  display: none;
`;

export {
  CategoriesHeader,
  CategoriesTitle,
  CategoriesListTitle,
  CategoriesList,
  CategoriesBtnSec,
  CategoriesBtnPrim,
  CategoriesEl,
  CategoriesCheck,
  CategoriesBtns,
  CategoriesSelect,
  CategoriesInputWrap,
  CategoriesImportLabel,
  CategoriesImportInput,
};
