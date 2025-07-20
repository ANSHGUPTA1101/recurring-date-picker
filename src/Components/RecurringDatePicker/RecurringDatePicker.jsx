import React, { useState, useMemo } from "react";
import "./RecurringDatePicker.css";
import WeeklyOptions from "../WeeklyOptions/WeeklyOptions";
import MonthlyOptions from "./MonthlyOptions/MonthlyOptions";
import DailyOptions from "./DailyOptions/DailyOptions";
import YearlyOption from "./yearly/yearly";
import RecurrenceSummary from "./RecurrenceSummary";
import CalendarPreview from "../CalendarPreview/CalendarPreview";
import { generateRecurringDates } from "../utility/generateRecurringDates";
import { useRecurrenceStore } from "../../store/useRecurrenceStore";

const RecurringDatePicker = () => {
  const generatedRecurringDates = [];
  const [recurrence, setRecurrence] = useState("daily");
  const [dailyInterval, setDailyInterval] = useState(1);
  const [weeklyInterval, setWeeklyInterval] = useState(1);

  const [selectWeekends, setSelectWeekends] = useState([]);
  const weekends = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [monthlyInterval, setMonthlyInterval] = useState(1);
  const [monthlyOption, setMonthlyOption] = useState("day");
  const [monthDay, setMonthDay] = useState(1);
  const [monthlyWeek, setMonthlyWeek] = useState("First");
  const [monthlyDayOfWeek, setMonthlyDayOfWeek] = useState("Mon");
  const [yearlyInterval, setYearlyInterval] = useState(1);
  const [yearlyMonth, setYearlyMonth] = useState(0);
  const [yearlyDay, setYearlyDay] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const generatedDates = useMemo(() => {
    if (!startDate || !endDate) return [];

    return generateRecurringDates({
      recurrence,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      dailyInterval,
      weeklyInterval,
      selectWeekends,
      monthlyInterval,
      monthDay,
      monthlyOption,
      monthlyWeek,
      monthlyDayOfWeek,
      yearlyInterval,
      yearlyMonth,
      yearlyDay,
    });
  }, [
    recurrence,
    startDate,
    endDate,
    dailyInterval,
    weeklyInterval,
    selectWeekends,
    monthlyInterval,
    monthDay,
    monthlyOption,
    monthlyWeek,
    monthlyDayOfWeek,
    yearlyInterval,
    yearlyMonth,
    yearlyDay,
  ]);

  const getSummary = () => {
    return (
      <RecurrenceSummary
        recurrence={recurrence}
        dailyInterval={dailyInterval}
        weeklyInterval={weeklyInterval}
        selectWeekends={selectWeekends}
        monthlyInterval={monthlyInterval}
        monthlyOption={monthlyOption}
        monthDay={monthDay}
        monthlyWeek={monthlyWeek}
        monthlyDayOfWeek={monthlyDayOfWeek}
        yearlyInterval={yearlyInterval}
        yearlyMonth={yearlyMonth}
        yearlyDay={yearlyDay}
        startDate={startDate}
        endDate={endDate}
      />
    );
  };

  return (
    <div className="Recurring">
      <div className="date-range-inputs">
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>

        <label>
          End Date (optional):
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>

      <label htmlFor="recurrence-type">Recurrence Type :-</label>
      <select
        id="recurrence-type"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {recurrence === "daily" && (
        <DailyOptions
          dailyInterval={dailyInterval}
          setDailyInterval={setDailyInterval}
        />
      )}

      {recurrence === "weekly" && (
        <WeeklyOptions
          weeklyInterval={weeklyInterval}
          setWeeklyInterval={setWeeklyInterval}
          selectWeekends={selectWeekends}
          setSelectWeekends={setSelectWeekends}
        />
      )}

      {recurrence === "monthly" && (
        <MonthlyOptions
          monthlyInterval={monthlyInterval}
          setMonthlyInterval={setMonthlyInterval}
          monthDay={monthDay}
          setMonthDay={setMonthDay}
          monthlyOption={monthlyOption}
          setMonthlyOption={setMonthlyOption}
          monthlyWeek={monthlyWeek}
          setMonthlyWeek={setMonthlyWeek}
          monthlyDayOfWeek={monthlyDayOfWeek}
          setMonthlyDayOfWeek={setMonthlyDayOfWeek}
        />
      )}

      {recurrence === "yearly" && (
        <YearlyOption
          yearlyInterval={yearlyInterval}
          setYearlyInterval={setYearlyInterval}
          yearlyMonth={yearlyMonth}
          setYearlyMonth={setYearlyMonth}
          yearlyDay={yearlyDay}
          setYearlyDay={setYearlyDay}
        />
      )}
      <div style={{ marginTop: "2rem", fontStyle: "italic", color: "#555" }}>
        {getSummary()}
      </div>

      <CalendarPreview recurringDates={generatedDates} />
    </div>
  );
};

export default RecurringDatePicker;
