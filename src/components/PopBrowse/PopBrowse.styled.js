import styled from "styled-components";
import { ModalTitle } from "../Modal/Modal.styled";
import { BtnPrim, BtnSec } from "../Button/Button.styled";

const BrowseTtl = styled(ModalTitle)``;

const BrowseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const BrowseStatus = styled.div`
  margin-bottom: 18px;
  p {
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }
`;

const BrowseStatusList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

const BrowseStatusItem = styled.div`
  border-radius: 24px;
  height: 30px;
  border: 0.7px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.button.status : theme.colors.button.secondary};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.button.text : theme.colors.button.statusText};
  padding: 10px 14px;
  font-size: 14px;
  line-height: 10px;
  letter-spacing: -0.14px;
  text-align: center;
  flex-grow: ${({ $isButton }) => ($isButton ? 1 : 0)};
  cursor: ${({ $isButton }) => ($isButton ? "pointer" : "default")};
`;

const BrowseBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

const BrowseFuncBtns = styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
gap: 10px;
justify-content: flex-start;
`;

const BrowseBtnSec = styled(BtnSec)`
  padding: 10px 14px;
  @media screen and (${({ theme }) => theme.devices.sm}) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const BrowseBtnPrim = styled(BtnPrim)`
  padding: 10px 14px;
  @media screen and (${({ theme }) => theme.devices.sm}) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export {
  BrowseTtl,
  BrowseHeader,
  BrowseStatus,
  BrowseStatusList,
  BrowseStatusItem,
  BrowseBtns,
  BrowseBtnSec,
  BrowseBtnPrim,
  BrowseFuncBtns,
};
