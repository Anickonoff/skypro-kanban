import { Link } from "react-router-dom";
import styled from "styled-components";
import { ModalTitle } from "../Modal/Modal.styled";
import { BtnPrim } from "../Button/Button.styled";

const NewCardTtl = styled(ModalTitle)`
  margin-bottom: 20px;
`;

const NewCardClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const NewCardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewCardFormBtn = styled(BtnPrim)`
  float: right;
  padding: 10px 14px;
`;

const NewCardCategories = styled.div`
  margin-bottom: 20px;
`;

const NewCardCategoriesTtl = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: 600;
  line-height: 1;
`;

const NewCardCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 7px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export {
  NewCardTtl,
  NewCardClose,
  NewCardFormBlock,
  NewCardFormBtn,
  NewCardCategories,
  NewCardCategoriesTtl,
  NewCardCategoriesThemes,
};
