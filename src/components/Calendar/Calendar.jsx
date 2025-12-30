import { CalendarAction, CalendarActions, CalendarBlock, CalendarCell, CalendarCells, CalendarContent, CalendarDayName, CalendarDayNameWeekend, CalendarDaysNames, CalendarDeadline, CalendarDeadlineText, CalendarMonth, CalendarNav, CalendarTitle, StyledCalendar } from "./Calendar.style";

const Calendar = () => {
  const daysName = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const days = [
    { day: 28, isOtherMonth: true },
    { day: 29, isOtherMonth: true },
    { day: 30, isOtherMonth: true },
    { day: 1 },
    { day: 2 },
    { day: 3, isWeekend: true },
    { day: 4, isWeekend: true },
    { day: 5 },
    { day: 6 },
    { day: 7, isCurrent: true },
    { day: 8, isActive: true},
    { day: 9 },
    { day: 10, isWeekend: true },
    { day: 11, isWeekend: true },
    { day: 12 },
    { day: 13 },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17, isWeekend: true },
    { day: 18, isWeekend: true },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22 },
    { day: 23 },
    { day: 24, isWeekend: true },
    { day: 25, isWeekend: true },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31, isWeekend: true },
    { day: 1, isOtherMonth: true, isWeekend: true },
  ];
  return (
    <StyledCalendar>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <CalendarActions>
            <CalendarAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </CalendarAction>
            <CalendarAction data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </CalendarAction>
          </CalendarActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            {daysName.map((day, index) => (
              index >=5 ? <CalendarDayNameWeekend key={day}>{day}</CalendarDayNameWeekend> : <CalendarDayName key={day}>{day}</CalendarDayName>
            ))}
          </CalendarDaysNames>
          <CalendarCells>
            {days.map((day) => (
              <CalendarCell 
                key={`${day.isOtherMonth ? 'other' : 'current'}-${day.day}`}
                $isOtherMonth={day.isOtherMonth}
                $isWeekend={day.isWeekend}
                $isCurrent={day.isCurrent}
                $isActive={day.isActive}
                >
                  {day.day}
                </CalendarCell>
            ))}
          </CalendarCells>
        </CalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <CalendarDeadline>
          <CalendarDeadlineText>
            Выберите срок исполнения <span className="date-control"></span>.
          </CalendarDeadlineText>
        </CalendarDeadline>
      </CalendarBlock>
    </StyledCalendar>
  );
};

export default Calendar;
