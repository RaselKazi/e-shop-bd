import { useState, useEffect } from 'react'

function CountdownTimerOne() {
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
    <div>
      <ul className="grid grid-cols-4 gap-1 text-white absolute left-0 right-0 top-28 lg:top-32 mx-3 ">
        {/* <!---DAYS--> */}
        <li className="p-1 text-center bg-black bg-opacity-70  rounded-sm">
          <span className="pb-2 font-bold text-base" id="days3">
            {days}
          </span>
          <h5 className=" uppercase mt-2 text-xs">day</h5>
        </li>
        {/* <!---hour--> */}
        <li className="p-1 text-center  bg-black bg-opacity-70 rounded-sm">
          <span className="pb-2 font-bold text-base" id="hours3">
            {hours}
          </span>
          <h5 className=" uppercase mt-2 text-xs">hour</h5>
        </li>
        {/* <!---minute--> */}
        <li className="p-1 text-center  bg-black bg-opacity-70 rounded-sm">
          <span className="pb-2 font-bold text-base" id="minutes3">
            {minutes}
          </span>
          <h5 className=" uppercase mt-2 text-xs">minute</h5>
        </li>
        {/* <!---SECEND--> */}
        <li className="p-1 text-center  bg-black bg-opacity-70 rounded-sm">
          <span className="pb-2 font-bold text-base" id="seconds3">
            {seconds}
          </span>
          <h5 className=" uppercase mt-2 text-xs">second</h5>
        </li>
      </ul>
    </div>
  )
}

export default CountdownTimerOne
