import React, { Component, useState } from 'react'
import { Link } from "react-router-dom"


export class Navbar extends Component {


  render() {
    return (

      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">World News</span>
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-row justify-center align-middle p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='mt-2'>
                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-400 md:p-0 dark:text-white dark:hover:text-white" aria-current="page">Home</Link>
              </li>
              <li className='mt-2'>
                <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
              </li>
              <li>
                <form>
                  <input type="text" className='h-8 w-36 rounded pl-2' placeholder='Search News' />
                  <button type='submit' className='bg-blue-700 text-white w-16 h-8 rounded ml-1'>Search</button>
                </form>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar
