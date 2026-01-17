import styled, { css, keyframes } from "styled-components";
import { ModalTitle } from "../Modal/Modal.styled";

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

const Animation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const AnimateButton = css`
  position: relative;
  z-index: 1;
  cursor: wait;
  &::before {
    position: absolute;
    content: "";
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    z-index: -2;
    width: calc(100% + 2px * 2);
    height: calc(100% + 2px * 2);
    background-size: 100% 100%;
    background-position: 0 0;
    border-radius: 6px;
    background-image: linear-gradient(
      90deg,
      #000,
      #565eef,
      #fff,
      #565eef,
      #000
    );
    animation: ${Animation} 2s linear infinite;
  }

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.button.disabled};
    z-index: -1;
    left: 0px;
    top: 0px;
    cursor: wait;
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
  &:disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled};
  }
  ${({ $loading }) => ($loading ? AnimateButton : "")}
`;

const BrowseBtnPrim = styled.button`
  ${StyledButton}
  background: #565eef;
  border: none;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled};
  }
  ${({ $loading }) => ($loading ? AnimateButton : "")}
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
