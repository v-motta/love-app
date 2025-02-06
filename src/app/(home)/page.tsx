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

      const diffInYears = differenceInYears(now, startDate)
      const diffInDays = differenceInDays(now, startDate) % 365
      const diffInHours = differenceInHours(now, startDate) % 24
      const diffInMinutes = differenceInMinutes(now, startDate) % 60
      const diffInSeconds = differenceInSeconds(now, startDate) % 60

      const years = String(diffInYears).padStart(2, '0')
      const days = String(diffInDays).padStart(2, '0')
      const hours = String(diffInHours).padStart(2, '0')
      const minutes = String(diffInMinutes).padStart(2, '0')
      const seconds = String(diffInSeconds).padStart(2, '0')

      setTimeTogether(
        `${years}y • ${days}d • ${hours}h • ${minutes}m • ${seconds}s`
      )
    }

    updateTimer()
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <ImagesSection />

      <div className="font-medium lg:px-24 bg-stone-700/90 text-zinc-50 font-bodoni-moda w-full py-5 space-y-4 text-center">
        <h1 className="text-2xl md:text-4xl">Time together</h1>

        <div className="w-5/6 sm:w-3/5 lg:w-2/3 xl:w-1/3 2xl:w-1/4 mx-auto h-px bg-zinc-50" />

        <p className="text-xl md:text-3xl tabular-nums select-none">
          {timeTogether}
        </p>
      </div>

      <div className="w-full px-4 md:w-1/2 xl:w-1/3 mt-8">
        <iframe
          title="spotify"
          className="rounded-xl"
          src="https://open.spotify.com/embed/track/5iSkdzgBBtAAkaqULGPZUd?utm_source=generator&theme=0"
          width="100%"
          height="240"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  )
}
