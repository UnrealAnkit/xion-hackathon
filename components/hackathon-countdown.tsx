"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function HackathonCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the hackathon date - March 25, 2025
    const hackathonDate = new Date("2025-03-25T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = hackathonDate - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <p className="text-center mb-4 font-medium">Hackathon Starts In:</p>
      <div className="grid grid-cols-4 gap-2">
        <TimeCard value={timeLeft.days} label="Days" />
        <TimeCard value={timeLeft.hours} label="Hours" />
        <TimeCard value={timeLeft.minutes} label="Minutes" />
        <TimeCard value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </CardContent>
    </Card>
  )
}

