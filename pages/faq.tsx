import React from 'react'
import Layout from '../components/Layout/Layout'

function faq() {
  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4 pt-5">
        <div>
          <div className=" mt-8 mb-4">
            <h4 className=" text-2xl font-bold tracking-tighter text-gray-700">
              Delivery
            </h4>
          </div>
          {/* -------Accrodion---------- */}
          <div x-data="{selected:1}" className="mb-1">
            <div className=" mb-1">
              {/* ------Button--------- */}
              <button className="w-full duration-300 px-4 h-10 bg-gray-100 hover:bg-yellow-500 rounded hover:text-white font-semibold focus:outline-none flex items-center relative">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Sed Do Eiusmod Tempor Incididunt</span>
                <span
                  x-show="selected == 1"
                  className="absolute -bottom-1 left-9 bg-yellow-500 h-3 w-3 transform rotate-45 z-10"
                ></span>
              </button>
              {/* ------Content--------- */}
              <div className="relative overflow-hidden transition-all max-h-0 duration-500 ">
                <div className="bg-gray-100 p-4 text-gray-500">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea{' '}
                  </span>
                </div>
              </div>
            </div>

            <div className=" mb-1">
              {/* -----Button-------- */}
              <button className="w-full duration-300 px-4 h-10 bg-gray-100 hover:bg-yellow-500 rounded hover:text-white font-semibold focus:outline-none flex items-center relative">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </span>
                <span>Lorem Ipsum Dolor Sit Amet Elit?</span>
                <span
                  x-show="selected == 2"
                  className="absolute -bottom-1 left-9 bg-yellow-500 h-3 w-3 transform rotate-45 z-10"
                ></span>
              </button>
              {/* -----Content------ */}
              <div className="relative overflow-hidden transition-all max-h-0 duration-500 min-h-full">
                <div className="bg-gray-100 p-4 text-gray-500">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore{' '}
                  </span>

                  <br />
                  <span className=" pt-5">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed .
                  </span>
                  <ul className=" list-disc pl-8 pt-5">
                    <li>
                      <a className=" hover:text-yellow-500" href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                    </li>
                    <li>
                      <a className=" hover:text-yellow-500" href="#">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </a>
                    </li>
                    <li>
                      <a className=" hover:text-yellow-500" href="#">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------002------ */}
        <div className=" pt-10">
          <div className=" mt-8 mb-4">
            <h4 className=" text-2xl font-bold tracking-tighter text-gray-700">
              Warrenty
            </h4>
          </div>

          <div x-data="{selected:null}" className="mb-1">
            <div className=" mb-1">
              <button className="w-full duration-300 px-4 h-10 bg-gray-100 hover:bg-yellow-500 rounded hover:text-white font-semibold focus:outline-none flex items-center relative">
                <span>Sed Do Eiusmod Tempor Incididunt</span>
                <span
                  x-show="selected == 1"
                  className="absolute -bottom-1 left-9 bg-yellow-500 h-3 w-3 transform rotate-45 z-10"
                ></span>
              </button>

              <div className="relative overflow-hidden transition-all max-h-0 duration-500 ">
                <div className="bg-gray-100 p-4 text-gray-500">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate{' '}
                  </span>
                </div>
              </div>
            </div>

            <div className=" mb-1">
              <button className="w-full duration-300 px-4 h-10 bg-gray-100 hover:bg-yellow-500 rounded hover:text-white font-semibold focus:outline-none flex items-center relative">
                <span>Lorem Ipsum Dolor Sit Amet Elit?</span>
                <span
                  x-show="selected == 2"
                  className="absolute -bottom-1 left-9 bg-yellow-500 h-3 w-3 transform rotate-45 z-10"
                ></span>
              </button>

              <div className="relative overflow-hidden transition-all max-h-0 duration-500 min-h-full">
                <div className="bg-gray-100 p-4 text-gray-500">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore{' '}
                  </span>

                  <br />
                  <span className=" pt-5">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                  <ul className=" list-disc pl-8 pt-5">
                    <li>
                      <a className=" hover:text-yellow-500" href="#">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                    </li>
                    <li>
                      <a className=" hover:text-yellow-500" href="#">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </a>
                    </li>
                    <li>
                      <a className=" hover:text-yellow-500" href="#">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default faq
