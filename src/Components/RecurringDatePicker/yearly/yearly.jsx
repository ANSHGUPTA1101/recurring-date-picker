import React from 'react'

const YearlyOption = ({yearlyInterval, setYearlyInterval, yearlyMonth, setYearlyMonth, yearlyDay, setYearlyDay}) => {
  return (
   <div style={{ marginTop: "1rem" }}>
          <label>
            Repeat Every
            <input
              type="number"
              min="1"
              value={yearlyInterval}
              onChange={(e) => setYearlyInterval(parseInt(e.target.value))}
              style={{ margin: "0 0.5rem", width: "60px" }}
            />
            Year(s)
          </label>
          <div style={{ marginTop: "1rem" }}>
            <label>
              On
              <select
                value={yearlyMonth}
                onChange={(e) => setYearlyMonth(parseInt(e.target.value))}
                style={{ marginLeft: "0.5rem" }}
              >
                {[
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
                ].map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </select>
            </label>
            <input
              type="number"
              min="1"
              max="31"
              value={yearlyDay}
              onChange={(e) => setYearlyDay(parseInt(e.target.value))}
              style={{ marginLeft: "1rem", width: "60px" }}
            />
          </div>
        </div>
  )
}

export default YearlyOption