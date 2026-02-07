import styled from "styled-components";
import { BtnPrim } from "../Button/Button.styled";

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

const HeaderBlock = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 20px;
  top: 0;
  left: 0;
  @media screen and (${({ theme }) => theme.devices.sm}) {
    padding: 0 26px;
  }
`;

const HeaderLogo = styled.div`
  flex-shrink: 0;
  img {
    width: 85px;
  }
`;

const HeaderNav = styled.nav`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  min-width: 0;
  flex: 1;
  gap: 20px;
  @media screen and (${({ theme }) => theme.devices.sm}) {
    min-width: 0;
  }
`;

const HeaderBtn = styled(BtnPrim)`
  min-width: 175px;
  padding: 10px 14px;
  @media screen and (${({ theme }) => theme.devices.sm}) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
  }
`;

const HeaderUser = styled.a`
  color: ${({ theme }) => theme.colors.button.textSecondary};
  display: flex;
  align-items: center;
  height: 20px;
  flex-wrap: nowrap;
  min-width: 0;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: 20px;
  font-weight: 500;
  & span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }
  &:after {
    content: "";
    display: block;
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.colors.button.textSecondary};
    border-bottom: 1.9px solid
      ${({ theme }) => theme.colors.button.textSecondary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  &:hover,
  &:visited {
    color: ${({ theme }) => theme.colors.button.textSecondary};
    &:after {
      border-left-color: ${({ theme }) => theme.colors.button.textSecondary};
      border-bottom-color: ${({ theme }) => theme.colors.button.textSecondary};
    }
  }
`;

export {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtn,
  HeaderUser,
};
