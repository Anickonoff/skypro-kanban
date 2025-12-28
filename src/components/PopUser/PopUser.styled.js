import styled, { css } from "styled-components";

const fontStyles = css`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

const PopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

const UserName = styled.p`
  ${fontStyles}
  color: #000;
  margin-bottom: 4px;
  font-weight: 500;
`;

const UserMail = styled.p`
  ${fontStyles}
  color: #94a6be;
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
  color: #000;
`;

const UserThemeBtn = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
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
    background-color: #94a6be;
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
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;
  a {
    color: #565eef;
  }
  &:hover {
    background-color: #33399b;
    color: #fff;
    a {
      color: #fff;
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