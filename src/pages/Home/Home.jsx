import React from 'react'
import Carousels from '../../component/Carousel/Carousel'
import About from '../About/About'
import Froms from '../Register_Form/Froms'
import Contact from '../Contact/Contact'
import Footer from '../../component/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Carousels/>
      <About/>
      <Froms/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
