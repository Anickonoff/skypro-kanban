import styled, { css } from "styled-components";

const themes = {
  "Новый год": css`
    background-color: #b4fdd1;
    color: #06b16e;
  `,
  Здоровье: css`
    background-color: #ffe4c2;
    color: #ff6d00;
  `,
  Ремонт: css`
    background-color: #e9d4ff;
    color: #9a48f1;
  `,
  Другое: css`
    background: #94a6be;
    color: #ffffff;
  `,
};

const SCardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

const SCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

const SCardHeader = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  ${(props) => (themes[props.theme] ? themes[props.theme] : themes["Другое"])}
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

const SCardBtn = styled.div`
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
    background-color: #94a6be;
  }
`;

const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const SCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

const SCardDate = styled.div`
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
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;

export {
  SCardItem,
  SCard,
  SCardHeader,
  SCardTheme,
  SCardBtn,
  SCardContent,
  SCardTitle,
  SCardDate,
};
