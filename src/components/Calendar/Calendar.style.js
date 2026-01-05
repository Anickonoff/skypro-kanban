import styled from "styled-components";

const StyledCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
  @media screen and (${({ theme }) => theme.devices.md}) {
    max-width: 340px;
    width: 100%;
  }
`;

const CalendarTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
  @media screen and (${({ theme }) => theme.devices.md}) {
    padding: 0;
  }
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
  @media screen and (${({ theme }) => theme.devices.md}) {
    padding: 0;
  }
`;

const CalendarMonth = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.size.sm};
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
    fill: ${({ theme }) => theme.colors.text.secondary};
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
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  @media screen and (${({ theme }) => theme.devices.md}) {
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;

const CalendarDayNameWeekend = styled(CalendarDayName)`
  color: ${({ theme }) => theme.colors.calendar.weekend};
`;

const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (${({ theme }) => theme.devices.md}) {
    width: 344px;
    height: auto;
    justify-content: space-around;
  }
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
  color: ${({ theme, $isActive, $isWeekend}) =>
    $isActive
      ? theme.colors.text.inverse
      : $isWeekend
      ? theme.colors.calendar.weekend
      : theme.colors.text.secondary};
  font-weight: ${({$isCurrent}) => ($isCurrent ? "700" : "normal")};
  background-color: ${({theme, $isActive}) => ($isActive ? theme.colors.calendar.bgActiveDay : "transparent")};
  opacity: ${({$isOtherMonth}) => ($isOtherMonth ? "0" : "1")};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  &:hover {
    background-color: ${({theme}) => theme.colors.calendar.bgCellHover};
    color: ${({theme}) =>theme.colors.text.secondary};
  }
  @media screen and (${({ theme }) => theme.devices.md}) {
    font-size: ${({ theme }) => theme.fonts.size.sm};
    width: 42px;
    height: 42px;
  }
`;

const CalendarDeadline = styled.div`
  padding: 0 7px;
  @media screen and (${({ theme }) => theme.devices.md}) {
    padding: 0;
  }
`;

const CalendarDeadlineText = styled.p`
  color: ${({theme}) =>theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: 1;
  span {
    color: ${({ theme }) => theme.colors.text.primary};
  }
  @media screen and (${({ theme }) => theme.devices.md}) {
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;

export {
  StyledCalendar,
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
