import styled from "styled-components";

const NFBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.background.secondary};
  @media screen and (${({ theme }) => theme.devices.md}) {
    flex-direction: column;
    height: auto;
  }
`;

const NFImg = styled.img`
  width: 100%;
  max-width: 500px;
`;

const NFTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const NFTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 600;
`;

const NFText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 400;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fonts.size.md};
`;

const NFLink = styled.p`
  & a {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: underline;
  }
`;

export { NFBlock, NFText, NFTitle, NFLink, NFTextBlock, NFImg };
