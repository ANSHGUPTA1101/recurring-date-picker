import React from "react";


const MonthlyOptions = ({
  monthlyInterval,
  setMonthlyInterval,
  monthDay,
  setMonthDay,
  monthlyOption,
  setMonthlyOption,
  monthlyWeek,
  setMonthlyWeek,
  monthlyDayOfWeek,
  setMonthlyDayOfWeek,
}) => {
  const weekends = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="recurrence-config">
      <label>Repeat every:</label>
      <input
        type="number"
        min="1"
        max="12"
        value={monthlyInterval}
        onChange={(e) => setMonthlyInterval(parseInt(e.target.value))}
      />
      <span>month(s)</span>
      <div style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="radio"
            value="day"
            checked={monthlyOption === "day"}
            onChange={() => setMonthlyOption("day")}
          />
          OnDay
        </label>
        <input
          type="number"
          min="1"
          max="31"
          value={monthDay}
          onChange={(e) => setMonthDay(parseInt(e.target.value))}
          disabled={monthlyOption !== "day"}
          style={{ marginLeft: "0.5rem", width: "60px" }}
        />
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            value="weekday"
            checked={monthlyOption === "weekday"}
            onChange={() => setMonthlyOption("weekday")}
          />
          On
        </label>

        <select
          value={monthlyWeek}
          onChange={(e) => setMonthlyWeek(e.target.value)}
          disabled={monthlyOption !== "weekday"}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
          <option value="Fourth">Fourth</option>
          <option value="Last">Last</option>
        </select>

        <select
          value={monthlyDayOfWeek}
          onChange={(e) => setMonthlyDayOfWeek(e.target.value)}
          disabled={monthlyOption !== "weekday"}
          style={{ marginLeft: "0.5rem" }}
        >
          {weekends.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthlyOptions;
