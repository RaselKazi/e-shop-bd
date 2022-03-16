import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'
import { toast, ToastContainer } from 'react-toastify'
import { getError } from '../utils/error'
import 'react-toastify/dist/ReactToastify.css'
import useGoTO from '../hook/useGoTO'
type FormValues = {
  email: string
  password: string
}

function login() {
  const router = useRouter()
  const { redirect } = router.query
  const { state, dispatch } = useContext(Store)
  const { userInfo } = state

  useEffect(() => {
    if (userInfo) {
      router.push('/')
    }
  }, [])

  const useGoTO = () => {
    router.push('/register')
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      })
      toast.success('User login successfully')
      dispatch({ type: 'USER_LOGIN', payload: data })
      Cookies.set('userInfo', JSON.stringify(data))
      router.push('/')
    } catch (err) {
      toast.error(getError(err))
    }
  }
  return (
    <section>
      <div
        className=" min-h-screen
            bg-gradient-to-tr
            to-pink-600
            from-sky-400
            sm:p-10
            px-4
            py-24
            flex
            items-center
            justify-center
          "
      >
        <div className="xl:w-2/5 md:w-2/3 sm:w-full w-full bg-white p-5 rounded-xl shadow-2xl transition duration-300">
          {/* ----text----- */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold">Login</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-4">
            {/* ---email--- */}
            <div>
              <h4 className="text-gray-500">
                Email <span className="text-red-500">*</span>
              </h4>
              <div className="relative">
                <span className="absolute top-3 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 mx-2 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                    errors.email
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-gray-300 focus:border-sky-400 '
                  }`}
                  {...register('email', {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                />
                {errors.email && (
                  <span className=" flex text-red-500 ">
                    {errors.email
                      ? errors.email.type === 'pattern'
                        ? 'Email is not valid'
                        : 'Email is required'
                      : ''}
                  </span>
                )}
              </div>
            </div>
            {/* ---Password---- */}
            <div>
              <h4 className="text-gray-500">
                Password <span className="text-red-500">*</span>
              </h4>
              <div className="relative">
                <span className="absolute top-3 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 mx-2 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  placeholder="type your Password"
                  className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                    errors.password
                      ? 'border-red-800 focus:border-red-800'
                      : 'border-gray-300 focus:border-sky-400 '
                  }`}
                  {...register('password', {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.password && (
                  <span className=" flex text-red-500 ">
                    {errors.password
                      ? errors.password.type === 'minLength'
                        ? 'Password length is more than 7'
                        : 'Password is required'
                      : ''}
                  </span>
                )}
              </div>
            </div>
            <div className="text-right text-gray-600">
              <a href="">Fotget password?</a>
            </div>

            {/* ---button--- */}
            <div className="flex space-x-4 pt-2">
              <button
                type="submit"
                className="
                    text-center
                    p-2
                    rounded-full
                    w-full
                    bg-gradient-to-r
                    from-sky-400
                    to-pink-500
                    hover:from-sky-400
                    hover:to-sky-400 transition-all duration-500
                    uppercase
                    font-semibold
                    text-white
                  "
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-center">
            <h5 className="text-gray-400">Or Sign Up using</h5>

            <div className="flex items-center justify-center mt-2 space-x-2">
              <a
                className="
                    h-10
                    flex
                    justify-center
                    items-center
                    w-10
                    duration-300
                    rounded-full
                    text-white
                    bg-blue-600
                  "
              >
                <svg
                  className="svg-inline--fa fa-facebook-f fa-w-10 w-5 h-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>

              <a
                className="
                    h-10
                    flex
                    justify-center
                    items-center
                    w-10
                    duration-300
                    rounded-full
                    text-white
                    bg-blue-400
                  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-twitter w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>

              <a
                className="
                    h-10
                    flex
                    justify-center
                    items-center
                    w-10
                    duration-300
                    rounded-full
                    text-white
                    bg-red-600
                  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-google w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
            </div>

            <div className="text-center mt-6">
              <a className="text-sky-400 flex items-center justify-center hover:text-sky-700 cursor-pointer transition duration-300">
                <span onClick={useGoTO}>Create New account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer limit={2} />
    </section>
  )
}

export default login
