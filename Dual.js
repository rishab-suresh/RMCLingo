import React from 'react'
import './DualStyle.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/job.jpeg'
import Moon from '../assets/opo.jpeg'


const Dual = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Placement Opportunity  </h1>
                <p>Upon completion of the desired courses, student will require to undergo for various placement opportunity. Within our network of partners who hire candidates for linguistic skills and also for various jobs opportunities. Our clients are from different industries and countries and students can select according to their preferences.
</p>
                <Link to='/contact'><button className='btn'>  CALL NOW</button></Link>
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

export default Dual;