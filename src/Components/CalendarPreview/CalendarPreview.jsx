import React from "react";
import { eachDayOfInterval, format, getDay } from "date-fns";

function CalendarPreview({ recurringDates = [] }) {
const baseDate =
  recurringDates.find((date) => date instanceof Date && !isNaN(date)) ||
  new Date();

const startOfMonth = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
const endOfMonth = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0);
 const recurringSet = new Set(
  recurringDates
    .filter((date) => date instanceof Date && !isNaN(date))
    .map((date) => format(date, "yyyy-MM-dd"))
);
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth,
    end: endOfMonth,
  });
  const startDayOfWeek = getDay(startOfMonth);

  return (
    <div>
      <h3>This Month's Dates</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={`${day}-${index}`}>{day}</div>
        ))}
        {Array.from({ length: startDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}
        {daysInMonth.map((day) => {
          const formatted = format(day, "yyyy-MM-dd");
          const isRecurring = recurringSet.has(formatted);

          if (isRecurring) {
            console.log("Recurring highlighted:", formatted);
          }

          return (
            <div
              key={formatted}
              style={{
                backgroundColor: isRecurring ? "#ffd54f" : "transparent",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarPreview;
