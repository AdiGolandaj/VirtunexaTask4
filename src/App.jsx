import React from 'react'
import Header from './components/Header'
import PicCapture from './components/PicCapture';
import Hero from './components/Hero';
import AfterHero from './components/AfterHero';


const App = () => {
  return (
    <div>
      <Header className='absolute z-50' />
      <Hero className='flex z-0'/>
      <AfterHero />
      <PicCapture />
    </div>
  )
}

export default App;