import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'
import Video from '../components/Video'


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <Video/>
            <HeroImage heading='Choose your Language' text='.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
