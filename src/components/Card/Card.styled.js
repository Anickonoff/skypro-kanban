import styled, { css, keyframes } from "styled-components";

const categoryMap = {
  Research: "newYear",
  "Web Design": "health",
  Copywriting: "repair",
};

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

const CardItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

const StyledCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({theme}) => theme.colors.background.surface}; 
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  ${({theme, $category}) => {
    const key = categoryMap[$category] ?? "other";
    const colors = theme.colors.categories[key];
    return css`
      background-color: ${colors.bg};
      color: ${colors.text};
    `;
    }
  }
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.text.secondary};
  }
`;

const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: ${({theme}) => theme.fonts.size.sm};
  font-weight: 500;
  line-height: 18px;
  color: ${({theme})=> theme.colors.text.primary};
  margin-bottom: 10px;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({theme}) => theme.colors.text.secondary};
    letter-spacing: 0.2px;
  }
`;

export {
  CardItem,
  StyledCard,
  CardHeader,
  CardTheme,
  CardBtn,
  CardContent,
  CardTitle,
  CardDate,
};
