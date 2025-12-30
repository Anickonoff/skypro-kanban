import styled from "styled-components";
import { devices } from "../../breakpoints";

const StyledMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;
//add container style here
const MainBlock = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 25px 30px 49px;
  @media screen and (${devices.lg}) {
    padding: 40px 30px 64px;
  }
  @media screen and (${devices.sm}) {
    padding: 40px 16px 64px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media screen and (${devices.lg}) {
    display: block;
  }
`;

export { StyledMain, MainBlock, MainContent };
