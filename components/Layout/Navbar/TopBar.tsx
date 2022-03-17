import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { socialIconData } from '../../../data/FooterData'
import { Store } from '../../../utils/Store'
const profileItem = [
  { title: 'Compare', link: '' },
  { title: 'Check out', link: '' },
  { title: 'Sign in', link: '' },
  { title: 'Register', link: '' },
]
function TopBar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const logoutHandler = () => {
    dispatch({ type: 'USER_LOGOUT' })
    Cookies.remove('userInfo')
    Cookies.remove('cartItems')
    Cookies.remove('shippinhAddress')
    Cookies.remove('paymentMethod')
    router.push('/')
  }

  return (
    <div className="flex justify-between bg-gray-100 py-3 xl:px-24 sm:px-10 px-4">
      <div className=" sm:block hidden">
        <div className="text-sm text-gray-600">
          {state.userInfo ? (
            <div>
              Welcome to E-market
              <Link href="/profile">
                <a className=" ml-4 text-md font-medium capitalize hover:text-yellow-500 transition duration-300 cursor-pointer ">
                  {state.userInfo?.name}
                </a>
              </Link>
            </div>
          ) : (
            <div>
              Please
              <Link href="/login">
                <a className=" text-yellow-500 mx-2">Sign in </a>
              </Link>
              or
              <Link href="/register">
                <a className="ml-2 text-yellow-500"> Register</a>
              </Link>
            </div>
          )}
        </div>
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
            className=" flex items-center sm:px-4 whitespace-nowrap cursor-pointer"
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
              className=" absolute rounded p-3 bg-white border w-full shadow mt-2 text-base overflow-hidden duration-300 z-10"
              onClick={() => setOpen(false)}
            >
              <ul className=" ">
                {state.userInfo?.role === 'admin' ? (
                  <Link href="/dashboard" passHref>
                    <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                      Admin panel
                    </li>
                  </Link>
                ) : (
                  <Link href="/profile" passHref>
                    <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                      Profile
                    </li>
                  </Link>
                )}
                <Link href="/product/compare" passHref>
                  <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                    Compare
                  </li>
                </Link>
                <Link href="/product/wish-list" passHref>
                  <li className=" py-1 rounded cursor-pointer capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                    Wish List
                  </li>
                </Link>
                <Link href="/place-older" passHref>
                  <li className="py-1 rounded cursor-pointer  capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                    Check out
                  </li>
                </Link>

                {state.userInfo ? (
                  <li
                    className=" py-1 rounded cursor-pointer  capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300"
                    onClick={logoutHandler}
                  >
                    Log out
                  </li>
                ) : (
                  <Link href="/login" passHref>
                    <li className="py-1 rounded cursor-pointer  capitalize hover:bg-gray-100 transition duration-200 border-b border-gray-300">
                      Sign in
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="sm:px-4 flex items-center space-x-6">
          {socialIconData.map((social) => (
            <a key={social.id} className=" text-gray-600" href="#">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar
