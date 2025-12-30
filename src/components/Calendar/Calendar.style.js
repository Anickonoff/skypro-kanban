import styled from "styled-components";

const CalendarTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
`;

const CalendarBlock = styled.div`
  display: block;
`;

const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

const CalendarActions = styled.div`
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CalendarAction = styled.div`
  /* width: 18px; */
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #94a6be;
  }
`;

const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const CalendarDayNameWeekend = styled(CalendarDayName)`
  color: #94a6be;
`;

const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.isActive ? "#fff" : props.isWeekend ? "#94a6be" : "#94a6be"};
  font-weight: ${(props) => (props.isCurrent ? "700" : "normal")};
  background-color: ${(props) => (props.isActive ? "#94a6be" : "transparent")};
  opacity: ${(props) => (props.isOtherMonth ? "0" : "1")};
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  &:hover {
    background-color: #eaeef6;
    color: #94a6be;
  }
`;

const CalendarDeadline = styled.div`
  padding: 0 7px;
`;

const CalendarDeadlineText = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  span {
    color: #000;
  }
`;


export {
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  CalendarActions,
  CalendarAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarDayNameWeekend,
  CalendarCells,
  CalendarCell,
  CalendarDeadline,
  CalendarDeadlineText,
};
