import { useState } from 'react'
import HomeIcon from '../../../public/icons/home.svg'

const menus = [
  { name: 'Da', icon: HomeIcon },
  // { name: 'Discounts', icon: DiscountIcon },
  //   { name: "Graph", icon: GraphIcon },
  //   { name: "Messages", icon: MessageIcon },
  //   { name: "Notifications", icon: NotificationIcon },
  //   { name: "Settings", icon: SettingsIcon },
  //   { name: "Logout", icon: LogoutIcon },
]
function DashboardSidebar() {
  const [menuItem, setMenuItem] = useState('Da')
  return (
    <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900 border border-sky-800">
      <button className="p-2 bg-opacity-20 rounded-xl bg-rose-400">
        {/* <StoreIcon /> */}
      </button>
      <div className="flex flex-col gap-y-4 items-end self-end">
        {menus.map((m) => {
          return (
            <div
              key={m.name}
              className={`${
                m.name === menuItem
                  ? 'bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
                  : ''
              }`}
              onClick={() => setMenuItem(m.name)}
            >
              <button
                className={`${
                  m.name === menuItem
                    ? 'p-4 my-4 mr-4 ml-3 rounded-xl  text-white shadow-rose-400 bg-rose-400'
                    : 'text-rose-400'
                }`}
              >
                <span className="w-6 h-6 fill-current"> {m.name}</span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardSidebar
