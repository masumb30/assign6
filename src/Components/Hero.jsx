import React from 'react'
import hero from '../assets/banner.png'

export const Hero = () => {
  return (
    <div className="relative flex max-w-300 mx-auto items-center overflow-hidden rounded-xl bg-white bg-[url('/banner.png')] bg-cover bg-center md:bg-none">
  <div className="absolute inset-0 bg-black/60 md:hidden"></div>

  <div className="relative z-10 flex w-full flex-col md:flex-row">
    
    <div className="flex w-full flex-col justify-center p-8 text-white md:w-1/2 md:p-16">
      <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        Experience the Future
      </h2>
      <p className="text-lg text-slate-200 md:text-slate-600">
        This section adapts to your screen. On desktop, you see a clean split layout. 
        On mobile, the image becomes the immersive backdrop for this text.
      </p>
      <button className="mt-8 w-fit rounded-full bg-blue-600 px-8 py-3 font-semibold transition-hover hover:bg-blue-700">
        Get Started
      </button>
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
