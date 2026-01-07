import styled, { css } from "styled-components";

const AuthFont = css`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  line-height: 150%;
  letter-spacing: -0.14px;
`;

// const AuthWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: scroll;
//   background-color: ${({ theme }) => theme.colors.background.secondary};
// `;

// const AuthContainer = styled.div`
//   display: block;
//   width: 100vw;
//   max-height: 100vh;
//   margin: 0 auto;
// `;

// const AuthModal = styled.div`
//   width: 100%;
//   height: 100%;
//   min-width: 320px;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   @media screen and (${({ theme }) => theme.devices.xs}) {
//     background-color: ${({ theme }) => theme.colors.background.surface};
//   }
// `;
const AuthModal = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background.secondary};

  @media screen and (${({ theme }) => theme.devices.xs}) {
    background-color: ${({ theme }) => theme.colors.background.surface};
  }
`;

const AuthBlock = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background.surface};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border.pop};
  box-shadow: ${({ theme }) => theme.shadows.pop};
  @media screen and (${({ theme }) => theme.devices.xs}) {
    padding: 0 16px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`;

const AuthTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;

const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthInput = styled.input`
  width: 100%;
  height: 30px;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.colors.border.default};
  outline: none;
  padding: 10px 8px;
  &::placeholder,
  &::-moz-placeholder {
    font-family: ${({ theme }) => theme.fonts.family};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.secondary};
    ${AuthFont}
  }
  &:not(:last-of-type) {
    margin-bottom: 7px;
  }
`;

const AuthBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.button.main};
  border-radius: 4px;
  margin: 20px 0;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  ${AuthFont}
  color: ${({ theme }) => theme.colors.button.text};
  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
  @media screen and (${({ theme }) => theme.devices.xs}) {
    height: 40px;
  }
`;

const AuthFooter = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondarytr};
  font-weight: 400;
  ${AuthFont}
  & a {
    color: ${({ theme }) => theme.colors.text.secondarytr};
    text-decoration: underline;
  }
`;

export {
  // AuthWrapper,
  // AuthContainer,
  AuthModal,
  AuthBlock,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthBtn,
  AuthFooter,
};
