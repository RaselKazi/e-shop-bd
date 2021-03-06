import React, { Dispatch, SetStateAction } from 'react'
import Rating from 'react-rating'

type RatingStar = {
  value: number
  show?: Boolean
  setRating?: Dispatch<SetStateAction<number>>
}
export default function RatingStar({ show, value, setRating }: RatingStar) {
  return (
    <div>
      <Rating
        initialRating={Number(value)}
        emptySymbol={
          <svg
            className={`text-gray-300 -z-40  cursor-pointer ${
              show ? 'w-8 h-8' : 'w-4 h-4'
            }`}
            fill="currentColor"
            viewBox="0 0 26 28"
          >
            <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
          </svg>
        }
        fullSymbol={
          <svg
            className={`text-yellow-400 -z-40 cursor-pointer ${
              show ? 'w-8 h-8' : 'w-4 h-4'
            }`}
            fill="currentColor"
            viewBox="0 0 26 28"
          >
            <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
          </svg>
        }
        readonly={!show}
        onClick={(e: number) => Number(e)}
      ></Rating>
    </div>
  )
}
