import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Midbar from '../components/Midbar'
import Section from '../components/Section'
import Operation from '../components/Operation'
import Boxmodel from '../components/Boxmodel'
import Dual from '../components/Dual'







const Home = () => {
    return (
        <div>
            <Navbar />
            <Video />
            <Midbar/>
            <Section/>
            <Operation/>
           <Boxmodel/>
        <Dual/>
            <Footer />

           
            
        </div>
    )
}

export default Home;
