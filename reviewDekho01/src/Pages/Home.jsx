import React from 'react'
import Hero from '../Components/HomePage/Hero'
import HowWeHelp from '../Components/HomePage/HowWeHelp'
import Reviews from '../Components/HomePage/Reviews'
import About from '../Components/HomePage/About'
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