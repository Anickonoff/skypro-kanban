import styled, { keyframes } from "styled-components";
const grow = keyframes`
    0%,
    100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(1.8);
    }
`;
const Sloader = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 400px;
  padding-top: 100px;
  background-color: ${({theme}) => theme.colors.background.secondary};
`;

const Sspan = styled.span`
  display: inline-block;
  width: 5px;
  height: 20px;
  background-color: ${({theme}) => theme.colors.button.main};
  animation: ${grow} 1s ease-in-out ${(props) => props.$delay || ""} infinite;
`;

export { Sloader, Sspan };
