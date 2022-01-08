import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

type FilterProps = {
  filter: string
  setFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function TableGlobalFilter({ filter, setFilter }: FilterProps) {
  return (
    <div className="py-5">
      <label className="flex gap-x-2 items-baseline">
        <span className="text-gray-700"></span>
        <input
          type="text"
          className=" py-1 px-4 text-white bg-gray-800 rounded-md border  border-sky-900 focus:border-sky-500  transition  duration-300 outline-none"
          value={filter || ''}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
          placeholder={` records...`}
        />
      </label>
    </div>
  )
}

export default TableGlobalFilter
