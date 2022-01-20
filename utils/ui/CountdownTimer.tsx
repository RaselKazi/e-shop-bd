import { useState, useEffect } from 'react'
import CountdownItem from './CountdownItem'

type classProp = {
  class: string
}
function CountdownTimer(props: classProp) {
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('1/5/2022 23:59:59')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-between xl:-ml-7">
      {/* ====Please Set timmer for this timmer from coundown-timmer.js file======= */}
      <div className=" mt-5" id="countdown">
        <ul className="flex items-center">
          {/* <!---DAYS--> */}
          <CountdownItem size={props.class} value={days}></CountdownItem>
          {/* <!---hours--> */}
          <CountdownItem size={props.class} value={hours}></CountdownItem>
          {/* <!---MINUTES--> */}
          <CountdownItem size={props.class} value={minutes}></CountdownItem>
          {/* <!---SECEND--> */}
          <CountdownItem size={props.class} value={seconds}></CountdownItem>
        </ul>
      </div>
    </div>
  )
}

export default CountdownTimer
