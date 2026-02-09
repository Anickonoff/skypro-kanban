import styled, { css } from "styled-components";

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

const BtnSec = styled.button`
  ${StyledButton}
  border: 0.7px solid ${({ theme }) => theme.colors.button.borderSecondary};
  background: ${({ theme }) => theme.colors.button.bgSecondary};
  color: ${({ theme }) => theme.colors.button.textSecondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hoverSecondary};
    color: ${({ theme }) => theme.colors.button.textPrimary};
  }
`;

const BtnPrim = styled.button`
  ${StyledButton}
  background: ${({ theme }) => theme.colors.button.bgPrimary};
  border: none;
  color: ${({ theme }) => theme.colors.button.textPrimary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hoverPrimary};
  }
`;

export { BtnSec, BtnPrim };
