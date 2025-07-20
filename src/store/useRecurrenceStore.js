import { create } from "zustand";

const today = new Date();
const nextMonth = new Date();
nextMonth.setMonth(today.getMonth() + 1);

export const useRecurrenceStore = create((set) => ({
  startDate: today,
  endDate: nextMonth,
  frequency: "daily", // default value
  interval: 1,
  byWeekday: [],
  byMonthDay: [],
  byYearDay: [],
    monthlyWeekdayPattern: {
    weekPosition: '',
    dayOfWeek: '',     
  },
  setMonthlyWeekdayPattern: (pattern) => set({ monthlyWeekdayPattern: pattern }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setFrequency: (freq) => set({ frequency: freq }),
  setInterval: (val) => set({ interval: val }),
  setByWeekday: (days) => set({ byWeekday: days }),
  setByMonthDay: (days) => set({ byMonthDay: days }),
  setByYearDay: (days) => set({ byYearDay: days }),
}));
