import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'

const Chart = () => {
  const [dailyData, setDailyData] = useState({})

  useEffect(() => {}, [])

  return (
    <div>
      <h1>Chart</h1>
    </div>
  )
}

export default Chart
