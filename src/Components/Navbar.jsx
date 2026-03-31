import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

export const Navbar = ({ addedProducts }) => {
  return (
    <div className="navbar  text-black max-w-300 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <a className=" text-3xl font-extrabold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Digitools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className='relative'>

          <CiShoppingCart className='bg-purple-100 text-3xl p-1 rounded-full' />
          <span className='absolute top-[-10px]  right-0 bg-purple-500 rounded-full text-white w-[15px] text-center'>{addedProducts.length ? addedProducts.length : ''}</span>
        </div>

        <button className='px-4'>Login</button>
        <button className='bg-linear-to-r from-blue-500 to-purple-600  text-white rounded-full px-4 py-2'>Get Started</button>

      </div>
    </div>
  )
}
