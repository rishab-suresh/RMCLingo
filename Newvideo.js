import React from 'react'
import { Link } from 'react-router-dom'
import './NewvideoStyle.css'

import spaceVideo from '../assets/spaceB.mp4'

const Newvideo = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Rmc Lingo</h1>
                <p> RMC Lingo – The proactive language lab!</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Apply</Link>
                </div>
            </div>
        </div>
    )
}

export default Newvideo
