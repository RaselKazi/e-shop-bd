import Link from 'next/link'
import { useState } from 'react'
import { DashboardMenuItem } from '../../../data/DashboardData'

function DashboardMainSidebar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div>
      {/* <!-- Mobile Menu Toggle --> */}
      <button
        className="sm:hidden absolute top-5 right-5 focus:outline-none"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {/*Menu Icons */}
        {mobileMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        className={`h-screen z-50 
        bg-gray-900 transition-all duration-300 space-y-2 border-r border-sky-800    ${
          open ? 'sm:w-20 w-64' : 'w-64'
        } ${
          mobileMenu
            ? ' absolute sm:static block top-0 left-0'
            : ' hidden md:sticky md:block top-0 -left-64 '
        }`}
      >
        <h1
          className="text-white text-center font-black py-4 relative"
          // x-bind:className="$store.sidebar.full ? 'text-2xl px-4' : 'text-xl px-4 xm:px-2'"
        >
          LOGO
          <span
            className="
            hidden z-50
            sm:block border
            border-sky-500
             text-sky-500
            absolute  
            -right-3
            top-4
           bg-gray-900
            shadow-md rounded-md
          "
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`text-sky-500 h-6 w-6 transition-all duration-300 transform ${
                open ? '-rotate-90' : ' rotate-90'
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </h1>

        <div className="px-4 space-y-2  ">
          {/* <!-- SideBar Toggle --> */}

          {DashboardMenuItem.map((menu) => {
            return (
              <div className="relative " onClick={() => setActive(menu.title)}>
                <div
                  className={`flex
              justify-between
              text-sky-300 hover:text-sky-600 transition duration-200 hover:bg-gray-800
              items-center
              space-x-2
              rounded-md
              p-2
              cursor-pointer group ${
                open ? 'sm:justify-center' : 'justify-start'
              } ${
                    active === menu.title
                      ? 'text-gray-200 bg-gray-800'
                      : 'text-gray-400'
                  }`}
                >
                  <Link href={`/${menu.link}`}>
                    <div className="relative flex space-x-2 items-center">
                      {menu.icon}
                      <h1
                        className={` ${
                          open
                            ? 'sm:hidden hidden  group-hover:block sm:absolute top-0 left-14 sm:border border-sky-600 sm:text-md sm:bg-gray-900 sm:px-2 sm:py-1 sm:rounded-md transition duration-300'
                            : ''
                        }`}
                      >
                        {menu.title}
                      </h1>
                    </div>
                  </Link>
                  {menu.dropdown.length === 0 ? (
                    <h1
                      className={`w-5 h-5 p-1 text-base bg-red-500 rounded-md leading-3 text-center text-white ${
                        open ? ' absolute top-0 left-5' : ''
                      }`}
                    >
                      8
                    </h1>
                  ) : (
                    <svg
                      className={`h-4 w-4 ${open ? 'sm:hidden' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                {/* <!-- Dropdown content --> */}

                {active === menu.title ? (
                  <div
                    className={`text-gray-400 space-y-3  ${
                      open
                        ? 'sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 sm:ml-0 w-28 border-2 border-sky-800 '
                        : 'border-l border-gray-400 ml-4 pl-4'
                    }`}
                  >
                    {/* <!-- Sub Dropdown  --> */}
                    {/* <div x-data="sub_dropdown" className="relative w-full">
                      <div className="flex items-center justify-between cursor-pointer">
                        <h1 className="hover:text-gray-200 cursor-pointer">
                          Item 3
                        </h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                      // x-show="sub_open"
                      // @click.outside="sub_open = false"
                      // x-bind:className="$store.sidebar.full ? sub_expanded className:sub_shrinked className"
                      >
                        <h1 className="hover:text-gray-200 cursor-pointer">
                          Sub Item 1
                        </h1>
                      </div>
                    </div> */}
                    {menu?.dropdown.map((drop) => {
                      return (
                        <h1 className="pb-2 border-b-2 border-sky-900 hover:text-gray-200 cursor-pointer">
                          {drop}
                        </h1>
                      )
                    })}
                  </div>
                ) : (
                  ''
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DashboardMainSidebar
