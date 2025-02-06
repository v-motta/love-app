'use client'

import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInYears,
} from 'date-fns'
import { useEffect, useState } from 'react'
import { ImagesSection } from './images-section'

export default function Home() {
  const [timeTogether, setTimeTogether] = useState('')

  useEffect(() => {
    const startDate = new Date('2023-01-22')
    const updateTimer = () => {
      const now = new Date()

      const years = differenceInYears(now, startDate)
      const days = differenceInDays(now, startDate) % 365
      const hours = differenceInHours(now, startDate) % 24
      const minutes = differenceInMinutes(now, startDate) % 60
      const seconds = differenceInSeconds(now, startDate) % 60

      setTimeTogether(`${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`)
    }

    updateTimer()
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <ImagesSection />

      <p className="text-3xl font-bold">{timeTogether}</p>
    </div>
  )
}
