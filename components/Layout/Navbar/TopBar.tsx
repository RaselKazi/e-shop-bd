import Link from 'next/link'
import { useState } from 'react'
import { socialIconData } from '../../../data/FooterData'
const profileItem = [
  { title: 'Compare', link: '' },
  { title: 'Check out', link: '' },
  { title: 'Sign in', link: '' },
  { title: 'Register', link: '' },
]
function TopBar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between bg-gray-100 py-3 xl:px-24 sm:px-10 px-4">
      <div className=" sm:block hidden">
        <p className="text-sm text-gray-600">
          Welcome to E-market!
          <Link href="/login">
            <a className=" text-yellow-500 ml-1">Sign in </a>
          </Link>
          or
          <Link href="/registration">
            <a className=" text-yellow-500"> Register</a>
          </Link>
        </p>
      </div>

      <div className="flex items-center sm:justify-end justify-between text-sm md:divide-x-2 divide-gray-300  text-gray-600 md:w-auto w-full">
        <a className=" hidden md:flex items-center sm:px-4" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>{' '}
          Gift Certificates
        </a>

        <div className="relative">
          <a
            className=" flex items-center sm:px-4 whitespace-nowrap"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            My Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-caret-down-fill h-3 w-3 ml-1"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </a>

          {open && (
            <div
              className=" absolute rounded p-3 bg-white border w-full shadow mt-2 text-base overflow-hidden duration-300"
              onClick={() => setOpen(false)}
            >
              {profileItem.map((item) => (
                <a className=" mb-2 block" href="#">
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="sm:px-4 flex items-center space-x-6">
          {socialIconData.map((social) => (
            <a className=" text-gray-600" href="#">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar
