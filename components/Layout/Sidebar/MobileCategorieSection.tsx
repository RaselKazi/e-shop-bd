import { useState } from 'react'
import MobileCategoriesMenu from '../Navbar/MobileCategoriesMenu'

function MobileCategorieSection() {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden block mb-10">
      <button className=" p-2 rounded w-full flex justify-between bg-gray-100">
        <span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setOpen(false)
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setOpen(true)
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          )}
        </span>
        <span className=" ml-2 font-bold uppercase">All Categories </span>
        <span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setOpen(false)
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform duration-300 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setOpen(true)
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          )}
        </span>
      </button>
      {/* <!---------MobileCategoriesMenu-----------> */}
      {open && (
        <nav className="absolute right-0 top-0 left-0 z-50">
          <div
            className="fixed top-0 left-0 bg-white shadow-2xl w-72 h-screen overflow-y-auto"
            onClick={() => {
              setOpen(false)
            }}
          >
            <div className=" rounded-md p-2 bg-red-500 m-4 mx-2 text-white flex items-center justify-center cursor-pointer">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
            <MobileCategoriesMenu></MobileCategoriesMenu>
          </div>
        </nav>
      )}
    </div>
  )
}

export default MobileCategorieSection
