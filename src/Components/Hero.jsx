import React from 'react'
import hero from '../assets/banner.png'

export const Hero = () => {
  return (
    <div className="relative flex max-w-300 mx-auto items-center overflow-hidden rounded-xl bg-white bg-[url('/banner.png')] bg-cover bg-center md:bg-none px-2 ">
      <div className="absolute inset-0 bg-black/60 md:hidden"></div>

      <div className="relative z-10 flex w-full flex-col md:flex-row">

        <div className="flex w-full flex-col justify-center text-white py-8 md:text-black md:w-1/2 ">
          <div className='flex items-center '>
            <span className='inline-block bg-purple-600 md:bg-purple-200 rounded-full px-2 py-1'><span className='bg-white md:bg-purple-600 w-2.5 h-2.5 inline-block rounded-full mr-2'></span>New: AI-Powered Tools Available</span>
          </div>
          <h2 className='text-[40px] lg:text-[55px] font-bold'>Supercharge Your <br /> Digital Workflow</h2>
          <p>Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.

            Explore Products
          </p>
          <div className='flex items-center gap-3 mt-4'>
            <button className='bg-linear-to-r from-purple-600 to-blue-400 px-3 py-2 rounded-full text-white'>Explore Products</button>
            <button className='border-purple-600 border px-3 py-2 rounded-full'>Watch demo</button>
          </div>
        </div>

        <div className="hidden w-1/2 md:block">
          <img
            src={hero}
            alt="Abstract digital art"
            className="w-full object-cover"
          />
        </div>

      </div>
    </div>
  )
}
