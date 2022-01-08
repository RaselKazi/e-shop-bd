import Link from 'next/link'
import { useState } from 'react'

const menuItem = [
  {
    title: 'Dashboard',
    link: 'dashboard',
    icon: (
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    dropdown: [],
    subDropdown: ['item1', 'item2'],
  },
  {
    title: 'audience',
    link: 'dashboard',
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    dropdown: ['item1', 'item2', 'item2'],
    subDropdown: ['item1', 'item2'],
  },
  {
    title: 'Posts',
    link: 'dashboard/newproduct',
    icon: (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    dropdown: ['item1', 'item2', 'item1', 'item2'],
    subDropdown: [''],
  },
  {
    title: 'Schedules',
    link: 'dashboard/allproduct',
    icon: (
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    dropdown: ['item1', 'item2', 'item1', 'item2'],
    subDropdown: [''],
  },
  {
    title: 'Income',
    link: 'dashboard/allproduct',
    icon: (
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
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
    dropdown: ['item1', 'item2', 'item1', 'item2'],
    subDropdown: [''],
  },
]
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

          {/* <!-- Audience --> */}

          {menuItem.map((menu) => {
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
                  <Link href={menu.link} passHref>
                    <a>
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
                    </a>
                  </Link>

                  {console.log(menu.dropdown === [])}

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
                    // x-cloak
                    // x-show="open"
                    // @click.outside="open =false"
                    // x-bind:className="$store.sidebar.full ? expandedclassName : shrinkedclassName"

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
                      // x-bind:className="$store.sidebar.full ? sub_expandedclassName:sub_shrinkedclassName"
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
