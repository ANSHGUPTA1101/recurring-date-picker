import React from 'react'

const DailyOptions = ({dailyInterval, setDailyInterval}) => {
  return (
    <div className="recurrence-config">
          <label htmlFor="daily-interval">Repeat every:</label>
          <input
            id="daily-interval"
            type="number"
            min="1"
            value={dailyInterval}
            onChange={(e) => setDailyInterval(e.target.value)}
          />
          <span>day(s)</span>
        </div>
  )
}

export default DailyOptions