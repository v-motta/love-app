'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [timeTogether, setTimeTogether] = useState('')

  useEffect(() => {
    const startDate = new Date('2023-01-22')
    const updateTimer = () => {
      const now = new Date()
      const difference = now.getTime() - startDate.getTime()

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
      )
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeTogether(`${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`)
    }

    updateTimer()
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-3xl font-bold">{timeTogether}</p>
    </div>
  )
}
