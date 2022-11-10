import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/chi.jpeg'
import Moon from '../assets/imp.jpeg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Why Study a foreign Language? </h1>
                <p>Over the past decades our world has become more interdependent and new technologies have allowed us to work in close contact with people all over the world. As relationships with countries grow, so does the need to speak a foreign language. We have an enhanced need for enlightened methodology that deliver both culturally and linguistically prepared to function in today’s world..</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
