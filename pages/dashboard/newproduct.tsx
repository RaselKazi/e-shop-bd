import Image from 'next/image'
import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import blog from '../../public/images/10.jpg'
function newproduct() {
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full ">
        <div className="flex justify-center items-center my-10">
          <form className="border border-sky-800 bg-gray-900 rounded-lg py-10 px-12 text-gray-500">
            <div className=" grid sm:grid-cols-2 gap-6 mb-5">
              <div>
                <label className="relative text-gray-200 my-4 text-sm font-bold">
                  First Name
                  <span className="absolute left-2  top-7 flex items-center pl-2">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-sky-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </span>
                  <input
                    className=" border-2 border-sky-800 placeholder-gray-500 pl-12 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800 focus:outline-none "
                    type="text"
                    placeholder="name"
                  ></input>
                </label>
              </div>

              <div>
                <label className=" text-gray-200 text-sm font-bold">
                  Last Name
                </label>
                <input
                  className=" border-2 border-sky-800 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800 focus:outline-none "
                  type="text"
                  placeholder="name"
                ></input>
              </div>
            </div>

            <div className=" grid sm:grid-cols-2 gap-6 mb-5">
              <div>
                <label className="text-gray-200 my-2 text-sm font-bold">
                  First Name
                </label>
                <input
                  className=" border-2 border-sky-800 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800 focus:outline-none "
                  type="text"
                  placeholder="name"
                ></input>
              </div>

              <div>
                <label className=" text-gray-200 text-sm font-bold">
                  Last Name
                </label>
                <input
                  className=" border-2 border-sky-800 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800 focus:outline-none "
                  type="number"
                  placeholder="name"
                ></input>
              </div>
            </div>

            <div className="mb-5">
              <label className="text-gray-200 text-sm font-bold">
                Email <span className=" text-red-500">*</span> (
                <a className="text-blue-400" href="privacy-policy.html">
                  privacy policy
                </a>
                )
              </label>
              <input
                className="text-gray-200 p-4 shadow rounded h-10 w-full bg-gray-800 focus:outline-none "
                type="text"
                required
              ></input>
            </div>

            <div className="mb-5 flex justify-between items-center">
              <div className="shrink-0">
                <Image
                  className=" rounded hover:opacity-80"
                  alt=""
                  src={blog}
                  layout="fixed"
                  width={40}
                  height={40}
                />
              </div>
              <label className="block">
                <span className="sr-only">photo</span>
                <input
                  type="file"
                  className="block w-full  file:transition file:duration-300 text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-l file:border-sky-400 file:text-sm file:font-semibold file:bg-sky-700 file:bg-opacity-25 file:text-sky-500 hover:file:text-white hover:file:bg-sky-900 focus:file:outline-none"
                />
              </label>
            </div>
            <div className="mb-5">
              <label className="text-gray-200 text-sm font-bold">
                Messages <span className=" text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className=" border-2 border-sky-800 placeholder-gray-500 focus:border-sky-400 focus:ring-sky-400 transition duration-300 text-gray-200   w-full resize-none  h-28 p-4 shadow rounded bg-gray-800 focus:outline-none"
                required
              >
                learning more about...
              </textarea>
            </div>

            <button
              type="submit"
              className="w-full h-12 border hover:border-sky-400 hover:bg-sky-800  border-sky-500  bg-gray-900  px-7 rounded text-sm text-sky-400 hover:text-white font-medium duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default newproduct
