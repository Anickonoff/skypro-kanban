import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background.secondary};
`;
//add container style here
const MainBlock = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 25px 30px 49px;
  @media screen and (${({theme}) => theme.devices.lg}) {
    padding: 40px 30px 64px;
  }
  @media screen and (${({theme}) => theme.devices.sm}) {
    padding: 40px 16px 64px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media screen and (${({theme}) => theme.devices.lg}) {
    display: block;
  }
`;

export { StyledMain, MainBlock, MainContent };
