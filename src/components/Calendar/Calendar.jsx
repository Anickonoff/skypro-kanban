import { useState } from "react";
import {
  CalendarAction,
  CalendarActions,
  CalendarBlock,
  CalendarCell,
  CalendarCells,
  CalendarContent,
  CalendarDayName,
  CalendarDayNameWeekend,
  CalendarDaysNames,
  CalendarDeadline,
  CalendarMonth,
  CalendarNav,
  CalendarTitle,
  StyledCalendar,
} from "./Calendar.style";
import CalendarFooter from "./Calendar.footer";

const Calendar = ({ taskDate, setTaskDate }) => {
  const daysName = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const monthsName = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const [month, setMonth] = useState(() => {
    return taskDate ? new Date(taskDate) : new Date();
  });

  const getLastMonday = (month) => {
    const lastMonday = new Date(month.getFullYear(), month.getMonth());
    const shift = lastMonday.getDay() == 0 ? 7 : lastMonday.getDay();
    lastMonday.setDate(lastMonday.getDate() - (shift - 1));
    return lastMonday;
  };

  const getFirstSunday = (month) => {
    const nextSunday = new Date(month.getFullYear(), month.getMonth() + 1);
    const shift =
      nextSunday.getDay() == 0
        ? 7
        : nextSunday.getDay() == 1
        ? 8
        : nextSunday.getDay();
    nextSunday.setDate(nextSunday.getDate() + (7 - shift));
    return nextSunday;
  };

  const getDays = (month) => {
    const today = new Date();
    const newDays = [];
    const startDate = getLastMonday(month);
    const endDate = getFirstSunday(month);
    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      newDays.push({
        day: date.getDate(),
        date: new Date(date),
        isCurrent:
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear(),
        isOtherMonth: date.getMonth() !== month.getMonth(),
        isWeekend: date.getDay() === 0 || date.getUTCDay() === 6,
        isActive: taskDate
          ? date.getDate() === taskDate.getDate() &&
            date.getMonth() === taskDate.getMonth() &&
            date.getFullYear() === taskDate.getFullYear()
          : false,
      });
    }
    return newDays;
  };

  const chngMonth = (action) => {
    if (action === "prev") {
      setMonth(new Date(month.getFullYear(), month.getMonth() - 1));
    } else {
      setMonth(new Date(month.getFullYear(), month.getMonth() + 1));
    }
  };

  const setTaskDateHandler = (date) => {
    if (date) {
      setTaskDate(date);
    }
  };

  const days = getDays(month); // список дней текущего месяца либо заданной даты

  return (
    <StyledCalendar>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>
            {monthsName[month.getMonth()] + " " + month.getFullYear()}
          </CalendarMonth>
          <CalendarActions>
            <CalendarAction onClick={() => chngMonth("prev")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </CalendarAction>
            <CalendarAction onClick={() => chngMonth("next")}>
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
            {daysName.map((day, index) =>
              index >= 5 ? (
                <CalendarDayNameWeekend key={day}>{day}</CalendarDayNameWeekend>
              ) : (
                <CalendarDayName key={day}>{day}</CalendarDayName>
              )
            )}
          </CalendarDaysNames>
          <CalendarCells>
            {days.map((day) => (
              <CalendarCell
                key={`${day.isOtherMonth ? "other" : "current"}-${day.day}`}
                $isOtherMonth={day.isOtherMonth}
                $isWeekend={day.isWeekend}
                $isCurrent={day.isCurrent}
                $isActive={day.isActive}
                onClick={() => {
                  setTaskDateHandler(day.date);
                }}
              >
                {day.day}
              </CalendarCell>
            ))}
          </CalendarCells>
        </CalendarContent>
        <CalendarDeadline>
          <CalendarFooter taskDate={taskDate} />
        </CalendarDeadline>
      </CalendarBlock>
    </StyledCalendar>
  );
};

export default Calendar;
