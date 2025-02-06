'use client'

import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInYears,
} from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import meAndHer1 from '../../../public/me-n-her-1.jpg'
import meAndHer2 from '../../../public/me-n-her-2.jpg'
import meAndHer3 from '../../../public/me-n-her-3.jpg'

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
      <header className="py-4 border-b border-b-zinc-400 shadow w-full flex justify-center">
        <nav className="flex gap-x-4 font-extrabold text-lg md:text-2xl font-cormorant">
          <Link href="/gallery">Gallery</Link>
          <Link href="/our-story">Our story</Link>
        </nav>
      </header>

      <div className="relative">
        <div className="grid grid-cols-3">
          <Image
            src={meAndHer1}
            alt=""
            quality={100}
            className="object-cover h-56 md:h-96 2xl:h-[37rem]"
          />
          <Image
            src={meAndHer2}
            alt=""
            quality={100}
            className="object-cover h-56 md:h-96 2xl:h-[37rem]"
          />
          <Image
            src={meAndHer3}
            alt=""
            quality={100}
            className="object-cover h-56 md:h-96 2xl:h-[37rem]"
          />
        </div>
        <span className="absolute text-zinc-50 -translate-x-1/2 top-1/3 left-1/2 text-3xl md:text-5xl text-nowrap lg:text-6xl xl:text-8xl font-monsieurLaDoulaise">
          Mayara & Vinicius
        </span>
      </div>

      <p className="text-3xl font-bold">{timeTogether}</p>
    </div>
  )
}
