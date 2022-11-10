import React from 'react'
import {Link} from 'react-router-dom'
import './MidbarStyle.css'

const Midbar = () => {
    return (
        
        
        <div className='pricing'>
         <div className='card-container'>
                <div className='card'>
                    <h3>Why Study a foreign Language? </h3>
                    <span className='bar'></span>
                    <p>Foreign language study creates more positive attitude and chances of getting a job.
International travel is made easier and analytical skills improve when student study a foreign language.
</p>
                    <p>NEW LANGUAGE NEW VISION</p>
                    <p>Foreign language study enhances one’s opportunities in government, business, medicine, law, technology, military, industry, marketing, etc.
Foreign language provides a competitive edge in career choices.
</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Midbar;
