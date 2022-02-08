import React from 'react'
type StatsCardProps = {
  data: {
    ordersPrice: Number | any
    productsCount: Number
    ordersCount: Number
    usersCount: Number
  }
}
function StatsCard({ data }: StatsCardProps) {
  const stats = [
    {
      title: 'Total Revenue',
      percentage: '+32.40%',
      value: `$ ${Math.ceil(data.ordersPrice)}`,
      status: 'up',
      icon: 'CoinIcon',
    },
    {
      title: 'Total Products',
      percentage: '-12.40%',
      value: data.productsCount,
      status: 'down',
      icon: 'OrderIcon',
    },
    {
      title: 'Total Ordered',
      percentage: '-12.40%',
      value: data.ordersCount,
      status: 'down',
      icon: 'OrderIcon',
    },
    {
      title: 'Total Customer',
      percentage: '+2.40%',
      value: data.usersCount,
      status: 'up',
      icon: 'CustomerIcon',
    },
  ]
  return (
    <div className="flex gap-6">
      {stats.map((st) => {
        return (
          <div
            v-for="stat in stats"
            className="flex flex-col py-2 px-2  w-1/3 bg-gray-900 rounded-lg gap-y-3"
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
            <div className="text-2xl font-semibold text-white ">{st.value}</div>
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
