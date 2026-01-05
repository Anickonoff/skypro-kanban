import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.background.surface};
`;

//add container style here
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
  top: 0;
  left: 0;
  @media screen and (${({theme}) => theme.devices.sm}) {
    padding: 0 26px;
  }
`;

const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeaderBtn = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.button.main};
  color: ${({theme}) => theme.colors.button.text};
  border: none;
  font-size: ${({theme}) => theme.fonts.size.sm};
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  a {
    color: ${({theme}) => theme.colors.button.text};
  }
  &:hover {
    background-color: ${({theme}) => theme.colors.button.hover};
  }
  @media screen and (${({theme}) => theme.devices.sm}) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

const HeaderUser = styled.a`
  color: ${({theme}) => theme.colors.button.main};
  display: flex;
  align-items: center;
  height: 20px;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: ${({theme}) => theme.fonts.size.sm};
  line-height: 20px;
  &:after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({theme}) => theme.colors.button.main};
    border-bottom: 1.9px solid ${({theme}) => theme.colors.button.main};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  &:hover {
    color: ${({theme}) => theme.colors.button.hover};
    &:after {
      border-left-color: ${({theme}) => theme.colors.button.hover};
      border-bottom-color: ${({theme}) => theme.colors.button.hover};
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
}