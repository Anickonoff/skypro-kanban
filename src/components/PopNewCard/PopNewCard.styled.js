import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledCategory } from "../Category/Category.styled";
import { ModalTitle } from "../Modal/Modal.styled";

const NewCardTtl = styled(ModalTitle)`
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

const NewCardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
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

export {
  NewCardTtl,
  NewCardClose,
  NewCardFormBlock,
  NewCardFormBtn,
  NewCardCategories,
  NewCardCategoriesTtl,
  NewCardCategoriesThemes,
};
