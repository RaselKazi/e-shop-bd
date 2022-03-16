/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import CountdownItem from './CountdownItem'
import CountdownItemBlack from './CountdownItemBlack'

type classProp = {
  cardSize?: string
  variant?: string
  discountDate: Date
}
function CountdownTimer({ cardSize, discountDate, variant }: classProp) {
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  if (new Date(discountDate) > new Date()) {
    useEffect(() => {
      const target = new Date(discountDate)

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
      <div
        className={`${
          variant === 'black'
            ? ''
            : ' flex items-center justify-start lg:justify-evenly xl:-ml-7 mt-6'
        }`}
      >
        {variant === 'black' ? (
          ''
        ) : (
          <div className=" hidden lg:block mr-4">
            <h4 className="text-2xl tracking-tighter font-bold whitespace-nowrap">
              Hurry Up!
            </h4>
            <h5 className="text-sm whitespace-nowrap"> Offer ends in:</h5>
          </div>
        )}

        <ul
          className={`${
            variant === 'black'
              ? ' grid grid-cols-4 gap-2 text-white absolute left-0 right-0 top-1/2  mx-3 '
              : ' flex items-center'
          }`}
        >
          {/* <!---DAYS--> */}
          {variant === 'black' ? (
            <CountdownItemBlack text="days" value={days} />
          ) : (
            <CountdownItem size={cardSize} text="days" value={days} />
          )}

          {/* <!---hours--> */}
          {variant === 'black' ? (
            <CountdownItemBlack text="hours" value={hours} />
          ) : (
            <CountdownItem size={cardSize} text="hours" value={hours} />
          )}
          {/* <!---MINUTES--> */}
          {variant === 'black' ? (
            <CountdownItemBlack text="minutes" value={minutes} />
          ) : (
            <CountdownItem size={cardSize} text="minutes" value={minutes} />
          )}
          {/* <!---SECEND--> */}
          {variant === 'black' ? (
            <CountdownItemBlack text="seconds" value={seconds} />
          ) : (
            <CountdownItem size={cardSize} text="seconds" value={seconds} />
          )}
        </ul>
      </div>
    )
  } else {
    return <></>
  }
}

export default CountdownTimer
