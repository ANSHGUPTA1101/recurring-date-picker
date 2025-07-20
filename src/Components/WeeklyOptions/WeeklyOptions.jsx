import React from 'react'


const WeeklyOptions = ({ weeklyInterval, setWeeklyInterval, selectWeekends, setSelectWeekends }) => {
     const weekends = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
      <div className="recurrence-config">
          <div className="recurrence-config">
            <label htmlFor="weekly-interval">Repeat every:</label>
            <input
              id="weekly-interval"
              type="number"
              min="1"
              value={weeklyInterval}
              onChange={(e) => setWeeklyInterval(parseInt(e.target.value))}
            />
            <span>week(s)</span>
          </div>
          <label>Repeat on:</label>
          <div className="weekendsCheckbox">
            {weekends.map((day) => (
              <label key={day} className="weekends-option">
                <input
                  type="checkbox"
                  value={day}
                  checked={selectWeekends.includes(day)}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSelectWeekends((prev) =>
                      prev.includes(value)
                        ? prev.filter((d) => d !== value)
                        : [...prev, value]
                    );
                  }}
                />
                {day}
              </label>
            ))}
          </div>
        </div>
  )
}

export default WeeklyOptions