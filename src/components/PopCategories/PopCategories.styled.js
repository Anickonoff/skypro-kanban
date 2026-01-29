import styled from "styled-components";
import { ModalTitle } from "../Modal/Modal.styled";
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

const CategoriesBtnSec = styled(BtnSec)`
  padding: 0 10px;
`;

const CategoriesBtnPrim = styled(BtnPrim)`
  padding: 0 10px;
`;



export {
  CategoriesHeader,
  CategoriesTitle,
  CategoriesListTitle,
  CategoriesList,
  CategoriesBtnSec,
  CategoriesBtnPrim,
};
