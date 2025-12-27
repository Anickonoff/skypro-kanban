import styled, { keyframes } from "styled-components";
const grow = keyframes`
    0%,
    100% {
        -webkit-transform: scaleY(1);
        -ms-transform: scaleY(1);
        -o-transform: scaleY(1);
        transform: scaleY(1);
    }
    50% {
        -webkit-transform: scaleY(1.8);
        -ms-transform: scaleY(1.8);
        -o-transform: scaleY(1.8);
        transform: scaleY(1.8);
    }
`;
const Sloader = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 400px;
  padding-top: 100px;
  background-color: #eaeef6;
`;

const Sspan = styled.span`
  display: inline-block;
  width: 5px;
  height: 20px;
  background-color: #565eef;
`;

const Sspan1 = styled(Sspan)`
  animation: ${grow} 1s ease-in-out infinite;
`;

const Sspan2 = styled(Sspan)`
  animation: ${grow} 1s ease-in-out 0.15s infinite;
`;

const Sspan3 = styled(Sspan)`
  animation: ${grow} 1s ease-in-out 0.3s infinite;
`;

const Sspan4 = styled(Sspan)`
  animation: ${grow} 1s ease-in-out 0.45s infinite;
`;

export { Sloader, Sspan1, Sspan2, Sspan3, Sspan4 };
