import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Counts } from './Components/Counts'
import { ToolsSection } from './Components/ToolsSection'
import StepsSection from './Components/Steps'
import PricingSection from './Components/PricingSection'
import TransformSection from './Components/TransformSection'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='shadow-sm'>

        <Navbar />
      </div>
      <Hero />
      <Counts/>
      <ToolsSection/>
      <StepsSection/>
      <PricingSection/>
      <TransformSection/>
      <Footer/>
    </>
  )
}

export default App
