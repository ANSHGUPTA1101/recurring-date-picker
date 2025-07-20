import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isAfter,
  isBefore,
  isEqual,
} from "date-fns";

export function generateRecurringDates({
  startDate,
  endDate,
  frequency,
  interval,
  monthDay,
  monthlyOption,
  monthlyWeek,
  monthlyDayOfWeek,
  weeklyDays = [],
}) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (isBefore(currentDate, endDate) || isEqual(currentDate, endDate)) {
    if (frequency === "daily") {
      dates.push(new Date(currentDate));
      currentDate = addDays(currentDate, interval);
    } else if (frequency === "weekly") {
      weeklyDays.forEach((day) => {
        const dayIndex = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].indexOf(day);
        const weekDate = new Date(currentDate);
        weekDate.setDate(
          weekDate.getDate() + ((dayIndex - weekDate.getDay() + 7) % 7)
        );
        if (weekDate <= endDate && weekDate >= startDate) {
          dates.push(weekDate);
        }
      });
      currentDate = addWeeks(currentDate, interval);
    } else if (frequency === "monthly") {
      const monthStart = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      let date;

      if (monthlyOption === "day") {
        date = new Date(
          monthStart.getFullYear(),
          monthStart.getMonth(),
          monthDay
        );
      } else if (monthlyOption === "weekday") {
        const weekMap = {
          First: 1,
          Second: 2,
          Third: 3,
          Fourth: 4,
          Last: -1,
        };
        const dayMap = {
          Sunday: 0,
          Monday: 1,
          Tuesday: 2,
          Wednesday: 3,
          Thursday: 4,
          Friday: 5,
          Saturday: 6,
        };

        const targetWeek = weekMap[monthlyWeek];
        const targetDay = dayMap[monthlyDayOfWeek];
        const month = monthStart.getMonth();
        const year = monthStart.getFullYear();

        if (targetWeek === -1) {
          let lastDayOfMonth = new Date(year, month + 1, 0);
          while (lastDayOfMonth.getDay() !== targetDay) {
            lastDayOfMonth = addDays(lastDayOfMonth, -1);
          }
          date = lastDayOfMonth;
        } else {
          date = new Date(year, month, 1);
          let count = 0;
          while (date.getMonth() === month) {
            if (date.getDay() === targetDay) count++;
            if (count === targetWeek) break;
            date = addDays(date, 1);
          }
        }
      }

      if (date && date >= startDate && date <= endDate) {
        dates.push(date);
      }

      currentDate = addMonths(currentDate, interval);
    } else if (frequency === "yearly") {
      dates.push(new Date(currentDate));
      currentDate = addYears(currentDate, interval);
    } else {
      break;
    }
  }

  return dates.sort((a, b) => a - b);
}
