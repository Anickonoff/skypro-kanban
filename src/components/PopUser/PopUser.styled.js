import styled, { css } from "styled-components";

const fontStyles = css`
  font-size: ${({theme})=>theme.fonts.size.sm};
  line-height: 21px;
  letter-spacing: -0.14px;
`;

const PopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 41px;
  right: 0;
  min-width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${({theme}) => theme.colors.border.default};
  background: ${({theme}) => theme.colors.background.surface};
  box-shadow: ${({theme})=>theme.shadows.popUser};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

const UserName = styled.p`
  ${fontStyles}
  color: ${({theme}) => theme.colors.text.primary};
  margin-bottom: 4px;
  font-weight: 500;
`;

const UserMail = styled.p`
  ${fontStyles}
  color: ${({theme}) => theme.colors.text.secondary};
  margin-bottom: 10px;
`;

const UserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const UserThemeTitle = styled.p`
  ${fontStyles}
  color: ${({theme}) => theme.colors.text.primary};
`;

const UserThemeBtn = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${({theme}) => theme.colors.background.secondary};
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.text.secondary};
    transition: 0.5s;
  }
  &:checked:before {
    left: 12px;
  }
`;

const UserExitBtn = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({theme}) => theme.colors.button.main};
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors.button.main};
  a {
    color: ${({theme}) => theme.colors.button.main};
  }
  &:hover {
    background-color: ${({theme}) => theme.colors.button.hover};
    color: ${({theme}) => theme.colors.button.text};
    a {
      color: ${({theme}) => theme.colors.button.text};
    }
  }
`;

export {
    PopUserSet,
    UserName,
    UserMail,
    UserTheme,
    UserThemeTitle,
    UserThemeBtn,
    UserExitBtn,
}