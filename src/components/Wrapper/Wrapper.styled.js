import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.page};
`;

export { StyledWrapper };
