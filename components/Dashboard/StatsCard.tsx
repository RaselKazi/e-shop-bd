import React from 'react'

const stats = [
  {
    title: 'Total Revenue',
    percentage: '+32.40%',
    value: '$10,243.00',
    status: 'up',
    icon: 'CoinIcon',
  },
  {
    title: 'Total Dish Ordered',
    percentage: '-12.40%',
    value: '23,456',
    status: 'down',
    icon: 'OrderIcon',
  },
  {
    title: 'Total Customer',
    percentage: '+2.40%',
    value: '1,234',
    status: 'up',
    icon: 'CustomerIcon',
  },
]
function StatsCard() {
  return (
    <div className="flex gap-6">
      {stats.map((st) => {
        return (
          <div
            v-for="stat in stats"
            className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3"
          >
            <div className="flex items-center gap-x-3">
              <div className="p-2 bg-gray-800 rounded-lg"></div>
              <span
                className={`text-xs font-medium ${
                  st.status === 'up' ? 'text-green-300' : 'text-red-400'
                }`}
              >
                {st.percentage}
              </span>
              <div className="p-0.5 rounded-full"></div>
            </div>
            <div className="text-3xl font-semibold text-white"> {st.value}</div>
            <div className="text-sm tracking-wide text-gray-500">
              {st.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsCard
