import React from 'react'
import Hero from '../Components/Homepage/Hero'
import HowWeHelp from '../Components/Homepage/HowWeHelp'
import Reviews from '../Components/Homepage/Reviews'
import About from '../Components/Homepage/About'
import Footer from '../Components/Footer/Footer'


const Home = ()=> {
  return (
    <div className=''>
    <Hero />
    <HowWeHelp />
    <Reviews />
    <About />
    <Footer />

    </div>
  )
}

export default Home