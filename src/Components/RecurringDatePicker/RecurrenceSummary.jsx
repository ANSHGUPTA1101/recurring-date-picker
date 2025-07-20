import React from "react";
import { format } from "date-fns";

const RecurrenceSummary = ({
  recurrence,
  dailyInterval,
  weeklyInterval,
  selectWeekends,
  monthlyInterval,
  monthlyOption,
  monthDay,
  monthlyWeek,
  monthlyDayOfWeek,
  yearlyInterval,
  yearlyMonth,
  yearlyDay,
  startDate,
  endDate,
}) => {
  const formattedStart = startDate
    ? format(new Date(startDate), "MMM d, yyyy")
    : "N/A";
  const formattedEnd = endDate
    ? format(new Date(endDate), "MMM d, yyyy")
    : "No end date";
  const getSummary = () => {
    switch (recurrence) {
      case "daily":
        return `Repeats every ${dailyInterval} day(s) starting from ${formattedStart}${
          endDate ? ` until ${formattedEnd}` : ""
        }`;
      case "weekly":
        return `Repeats every ${weeklyInterval} week(s) on ${selectWeekends.join(
          " , "
        )} starting from ${formattedStart}${
          endDate ? ` until ${formattedEnd}` : ""
        }`;
      case "monthly":
        if (monthlyOption === "day") {
          return `Repeats every ${monthlyInterval} month(s) on day ${monthDay} starting from ${formattedStart}${
            endDate ? ` until ${formattedEnd}` : ""
          }`;
        } else {
          return `Repeats every ${monthlyInterval} month(s) on the ${monthlyWeek} ${monthlyDayOfWeek} starting from ${formattedStart}${
            endDate ? ` until ${formattedEnd}` : ""
          }`;
        }
      case "yearly":
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `Repeats every ${yearlyInterval} year(s) on ${
          monthNames[yearlyMonth]
        } ${yearlyDay} starting from ${formattedStart}${
          endDate ? ` until ${formattedEnd}` : ""
        }`;
      default:
       let summary = "";

        if (formattedStart) summary += ` starting from ${formattedStart}`;
        if (formattedEnd) summary += ` until ${formattedEnd}`;

        return summary;
    }
  };

  return <p>{getSummary()}</p>;
};

export default RecurrenceSummary;
