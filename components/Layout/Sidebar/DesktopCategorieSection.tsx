import React from 'react'
import Filter from './Filter'
import SidebarCard from './SidebarCard'
import SidebarImgCard from './SidebarImgCard'

function DesktopCategorieSection() {
  return (
    <div className="hidden lg:block">
      <ul className=" border rounded divide-y">
        <li className="  p-3 flex items-center bg-gray-200 bg-opacity-80 rounded">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </span>
          <span className=" ml-2 font-bold uppercase ">All Categories </span>
        </li>

        <li className="p-4 hover:bg-gray-100">
          <a
            className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
            href="#"
          >
            <span>
              <svg
                className="svg-inline--fa fa-gitlab fa-w-16 w-4 h-4 mb-1 inline-block mr-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                ></path>
              </svg>{' '}
              Accessories
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        </li>

        <li className="p-4 hover:bg-gray-100">
          <a
            className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
            href="#"
          >
            <span>
              <svg
                className="svg-inline--fa fa-desktop fa-w-18 w-4 h-4 mb-1 inline-block mr-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
                ></path>
              </svg>{' '}
              Computer{' '}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        </li>

        <li className="p-4 hover:bg-gray-100">
          <a
            className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
            href="#"
          >
            <span>
              <svg
                className="svg-inline--fa fa-desktop fa-w-18 w-4 h-4 mb-1 inline-block mr-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                ></path>
              </svg>{' '}
              Smartphone{' '}
            </span>
          </a>
        </li>

        <li className="p-4 hover:bg-gray-100">
          <a
            className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
            href="#"
          >
            <span>
              <svg
                className="svg-inline--fa fa-desktop fa-w-18 w-4 h-4 mb-1 inline-block mr-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"
                ></path>
              </svg>{' '}
              Sport Clothing{' '}
            </span>
          </a>
        </li>

        <li className="p-4 hover:bg-gray-100">
          <a
            className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
            href="#"
          >
            <span>
              <svg
                className="svg-inline--fa fa-desktop fa-w-18 w-4 h-4 mb-1 inline-block mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M240.6 194.1c1.9-30.8 17.3-61.2 44-79.8C279.4 103.5 268.7 96 256 96h-29.4l30.7-22c7.2-5.1 8.9-15.1 3.7-22.3l-9.3-13c-5.1-7.2-15.1-8.9-22.3-3.7l-32 22.9 11.5-30.6c3.1-8.3-1.1-17.5-9.4-20.6l-15-5.6c-8.3-3.1-17.5 1.1-20.6 9.4l-19.9 53-19.9-53.1C121 2.1 111.8-2.1 103.5 1l-15 5.6C80.2 9.7 76 19 79.2 27.2l11.5 30.6L58.6 35c-7.2-5.1-17.2-3.5-22.3 3.7l-9.3 13c-5.1 7.2-3.5 17.2 3.7 22.3l30.7 22H32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h168.9c-5.5-9.5-8.9-20.3-8.9-32V256c0-29.9 20.8-55 48.6-61.9zM224 480c0 17.7 14.3 32 32 32h160V384H224v96zm224 32h160c17.7 0 32-14.3 32-32v-96H448v128zm160-288h-20.4c2.6-7.6 4.4-15.5 4.4-23.8 0-35.5-27-72.2-72.1-72.2-48.1 0-75.9 47.7-87.9 75.3-12.1-27.6-39.9-75.3-87.9-75.3-45.1 0-72.1 36.7-72.1 72.2 0 8.3 1.7 16.2 4.4 23.8H256c-17.7 0-32 14.3-32 32v96h192V224h15.3l.7-.2.7.2H448v128h192v-96c0-17.7-14.3-32-32-32zm-272 0c-2.7-1.4-5.1-3-7.2-4.8-7.3-6.4-8.8-13.8-8.8-19 0-9.7 6.4-24.2 24.1-24.2 18.7 0 35.6 27.4 44.5 48H336zm199.2-4.8c-2.1 1.8-4.5 3.4-7.2 4.8h-52.6c8.8-20.3 25.8-48 44.5-48 17.7 0 24.1 14.5 24.1 24.2 0 5.2-1.5 12.6-8.8 19z"
                ></path>
              </svg>
              Gifts, Sport, Toys
            </span>
          </a>
        </li>

        <li className="p-4 hover:bg-gray-100">
          <a
            className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
            href="#"
          >
            <span>
              <svg
                className="svg-inline--fa fa-desktop fa-w-18 w-4 h-4 mb-1 inline-block mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                ></path>
              </svg>
              Home Furniture
            </span>
          </a>
        </li>

        <li className="p-4 hover:bg-gray-100">
          <a
            className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
            href="#"
          >
            <span>
              <svg
                className="svg-inline--fa fa-desktop fa-w-18 w-4 h-4 mb-1 inline-block mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
                ></path>
              </svg>
              Kitchen
            </span>
          </a>
        </li>

        <ul className=" divide-y" x-data="{selected:null}">
          <li>
            <ul className="relative overflow-hidden transition-all max-h-0 duration-300 divide-y">
              <li className="p-4 hover:bg-gray-100">
                <a
                  className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
                  href="#"
                >
                  <span>
                    <svg
                      className="w-4 h-4 mb-1 inline-block mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"
                      ></path>
                    </svg>
                    Category Deals
                  </span>
                </a>
              </li>

              <li className="p-4 hover:bg-gray-100">
                <a
                  className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
                  href="#"
                >
                  <span>
                    <svg
                      className="w-4 h-4 mb-1 inline-block mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                      ></path>
                    </svg>{' '}
                    Jewelry
                  </span>
                </a>
              </li>

              <li className="p-4 hover:bg-gray-100">
                <a
                  className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
                  href="#"
                >
                  <span>
                    <svg
                      className="svg-inline--fa fa-desktop fa-w-18 w-4 h-4 mb-1 inline-block mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                      ></path>
                    </svg>{' '}
                    Fashion{' '}
                  </span>
                </a>
              </li>
            </ul>
          </li>

          <li className="p-4 hover:bg-gray-100">
            <a
              x-show="selected==null"
              className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
              href="#"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mb-1 inline-block mr-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                  ></path>
                </svg>
                More Categories
              </span>
            </a>

            <a
              x-show="selected==1"
              className="w-full  flex items-center justify-between text-gray-500 text-sm hover:text-yellow-500"
              href="#"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mb-1 inline-block mr-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"
                  ></path>
                </svg>
                Close Categories
              </span>
            </a>
          </li>
        </ul>
      </ul>
      <Filter></Filter>
      <SidebarCard></SidebarCard>

      <SidebarImgCard></SidebarImgCard>
    </div>
  )
}

export default DesktopCategorieSection
