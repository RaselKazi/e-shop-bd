import { useState, useEffect } from 'react'

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
      <div className=" hidden xl:block mr-4">
        <h4 className="text-2xl tracking-tighter font-bold whitespace-nowrap">
          Hurry Up!
        </h4>
        <h5 className="text-sm whitespace-nowrap"> Offer ends in:</h5>
      </div>

      {/* ====Please Set timmer for this timmer from coundown-timmer.js file======= */}
      <div className=" mt-5" id="countdown">
        <ul className="flex items-center">
          {/* <!---DAYS--> */}
          <li className=" mr-4 text-center">
            <span
              className={` font-bold rounded-full  flex items-center justify-center bg-gray-200 text-gray-600
               ${
                 props.class === 'max'
                   ? 'text-base h-10 w-10'
                   : 'h-12 w-12 text-xl'
               }`}
              id="days"
            >
              {days}
            </span>
            <h5 className=" text-gray-400 uppercase my-2 text-xs">days</h5>
          </li>
          {/* <!---YEARS--> */}
          <li className=" mr-4 text-center">
            <span
              className={` font-bold rounded-full  flex items-center justify-center bg-gray-200 text-gray-600
               ${
                 props.class === 'max'
                   ? 'text-base h-10 w-10'
                   : 'h-12 w-12 text-xl'
               }`}
              id="hours"
            >
              {hours}
            </span>
            <h5 className=" text-gray-400 uppercase my-2 text-xs">hours</h5>
          </li>
          {/* <!---MINUTES--> */}
          <li className=" mr-4 text-center">
            <span
              id="minutes"
              className={` font-bold rounded-full  flex items-center justify-center bg-gray-200 text-gray-600
               ${
                 props.class === 'max'
                   ? 'text-base h-10 w-10'
                   : 'h-12 w-12 text-xl'
               }`}
            >
              {minutes}
            </span>
            <h5 className=" text-gray-400 uppercase my-2 text-xs">minutes</h5>
          </li>
          {/* <!---SECEND--> */}
          <li className=" mr-4 text-center">
            <span
              className={` font-bold rounded-full  flex items-center justify-center bg-gray-200 text-gray-600
               ${
                 props.class === 'max'
                   ? 'text-base h-10 w-10'
                   : 'h-12 w-12 text-xl'
               }`}
              id="seconds"
            >
              {seconds}
            </span>
            <h5 className=" text-gray-400 uppercase my-2 text-xs">seconds</h5>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CountdownTimer
