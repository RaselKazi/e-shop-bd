import React, { useState } from 'react'
import FilterPrice from '../../../utils/ui/FilterPrice'
import FilterTag from '../../../utils/ui/FilterTag'

function Filter() {
  const [filterOpen, setFilterOpen] = useState('')
  return (
    <div className=" mt-5 border rounded">
      <div className=" font-bold p-3 flex items-center bg-gray-200 bg-opacity-80 rounded">
        <span>REFINE BY</span>
      </div>

      <div className=" p-4 text-gray-500 text-sm">
        <div className=" mt-4">
          <span>No filters applied</span>
        </div>

        <FilterTag name="Brand"></FilterTag>
        <FilterPrice name="Price"></FilterPrice>
        <FilterTag name="Tag"></FilterTag>
      </div>
    </div>
  )
}

export default Filter
