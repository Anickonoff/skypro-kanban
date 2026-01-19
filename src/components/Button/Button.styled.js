import styled, { css, keyframes } from "styled-components";

const StyledButton = css`
  height: 30px;
  border-radius: 4px;
  outline: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: 150%;
  letter-spacing: -0.14px;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled};
  }
  @media screen and (${({ theme }) => theme.devices.sm}) {
    width: 100%;
    height: 40px;
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
    top: -2px;
    left: -2px;
    z-index: -2;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background-size: 100% 100%;
    background-position: 0 0;
    border-radius: 6px;
    background-image: ${({ theme }) => `linear-gradient
      (90deg, #000, ${theme.colors.button.main}, #fff, ${theme.colors.button.main}, #000)`};
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

const BtnSec = styled.button`
  ${StyledButton}
  border: 0.7px solid ${({ theme }) => theme.colors.button.main};
  background: ${({ theme }) => theme.colors.button.secondary};
  color: ${({ theme }) => theme.colors.button.main};
  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
    color: ${({ theme }) => theme.colors.button.text};
  }
  ${({ $loading }) => ($loading ? AnimateButton : "")}
`;

const BtnPrim = styled.button`
  ${StyledButton}
  background: ${({ theme }) => theme.colors.button.main};
  border: none;
  color: ${({ theme }) => theme.colors.button.text};
  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
  ${({ $loading }) => ($loading ? AnimateButton : "")}
`;

export {
    BtnSec,
    BtnPrim,
}