import React from 'react'

function MobileMenu() {
  return (
    <div className="space-x-6 text-xs font-semibold w-full">
      <ul className="w-full tracking-wider">
        <li className=" duration-300 hover:shadow border-b border-t py-4 px-10">
          <a href="index.html">HOME</a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 relative">
          <a href="shop.html">
            New products
            <span className=" absolute z-20 top-3 right-2 mr-1 p-1 rounded bg-purple-700 text-xs capitalize px-4 text-white hover:text-white">
              New
            </span>
            <span className="absolute top-5 right-16 p-1 bg-purple-700 h-2 w-2 transform rotate-45"></span>
          </a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 relative">
          <a href="shop.html">
            Best sales
            <span className=" absolute z-20 top-3 right-2 mr-1 p-1 rounded bg-red-600 text-xs capitalize px-5 text-white hover:text-white">
              Hot
            </span>
            <span className="absolute top-5 right-16 p-1 bg-red-600 h-2 w-2 mr-1 transform rotate-45"></span>
          </a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10">
          <a href="shop.html">Shop</a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10">
          <a href="contact-us.html">CONTACT</a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10">
          <a href="faq.html">FAQ</a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10">
          <a href="terms-and-condition.html">Terms condition</a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10">
          <a href="privacy-policy.html">Privacy policy</a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10">
          <a href="login.html">LogIn</a>
        </li>
        <li className=" duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10">
          <a href="registration.html">Register</a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
