import styled, { css, keyframes } from "styled-components";
import { StyledCategory } from "../Category/Category.styled";

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

const skeletonAnimation = keyframes`
100% {
  transform: translateX(100%);
}
`;

const skeletonStyle = css`
  position: relative;
  overflow: hidden;
  background-color: #c1cddc;
  color: transparent;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(90deg, #c1cddc, #e9eef7, #c1cddc);
    animation: ${skeletonAnimation} 2.2s infinite;
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
  background-color: ${({ theme }) => theme.colors.background.surface};
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

const CardTheme = styled(StyledCategory)`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  ${({ $skeleton }) => $skeleton && skeletonStyle}
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
    width: ${({$skeleton}) => $skeleton ? "100%" : "4px"};
    height: 4px;
    border-radius: ${({$skeleton}) => $skeleton ? "0" : "50%"};
    background-color: ${({ theme }) => theme.colors.text.secondary};
    ${({ $skeleton }) => $skeleton && skeletonStyle}
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
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 10px;
  ${({ $skeleton }) => $skeleton && skeletonStyle}
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.text.secondary};
  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.2px;
  }
  ${({ $skeleton }) => $skeleton && skeletonStyle}
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
