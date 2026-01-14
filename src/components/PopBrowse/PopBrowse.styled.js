import styled, { css } from "styled-components";
import { ModalTitle } from "../Modal/Modal.styled";

const BrowseTtl = styled(ModalTitle)``;

const BrowseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const BrowseStatus = styled.div`
  margin-bottom: 11px;
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
`;

const BrowseStatusItem = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background-color: #94a6be;
  color: #ffffff;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

const BrowseBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

const StyledButton = css`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  border-radius: 4px;
  outline: none;
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
  }
`;

const BrowseBtnSec = styled.button`
  ${StyledButton}
  border: 0.7px solid var(--palette-navy-60, #565eef);
  background: transparent;
  color: #565eef;
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

const BrowseBtnPrim = styled.button`
  ${StyledButton}
  background: #565eef;
  border: none;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
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
};
