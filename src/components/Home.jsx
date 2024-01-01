import React from 'react'
import "../css components/home.css"
import Upcoming from './Upcoming'
import Slider from './Slider'
import CountupAnimation from './CountupAnimation'
import Accordions from './Accordions'
import Suscribe from './Suscribe'
import Footer from './Footer'
import Copyright from './Copyright'
import SwiperHeader from './SwiperHeader'

const Home = () => {
  return (
    <div>
        <SwiperHeader />
        <Upcoming />
        <Slider />
        <CountupAnimation />
        <Accordions />
        <Suscribe />
        <Footer />
        <Copyright />
    </div>
  )
}

export default Home