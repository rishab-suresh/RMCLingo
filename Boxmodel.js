import React from 'react'
import {Link} from 'react-router-dom'
import './BoxmodelStyle.css'

const Boxmodel = () => {
    return (
        <div className='pricingS'>
            <div className='card-containerS'>
                <div className='cardS'>
                    <h3></h3>
                    <span className='barS'></span>
                    <p className='btcS'></p>
                    <p><button><b><h3>Personalization</h3></b></button></p>
                    <p>The language course at RMC Lingo can be personalized based on the requirement of the candidate. We provide customized program based on the purpose of study and convenient time period and duration (academic, examination, business or employment) for the aspirants who seek to get abroad educations.
</p>
                    <Link to='/contact' className='btnS'></Link>
                </div>
                <div className='cardS'>
                    <h3></h3>
                    <span className='barS'></span>
                    <p className='btcS'></p>
                    <p><button><b><h3>Flexible</h3></b></button></p>
                    <p>Candidate is able to select the timings and model for the language classes. Online and offline modes are available for all languages, and for students connecting via internet the suitable time slot can be offered that aligns with the country’s timings, also the option of taking individual and groups classes is made available for candidates.
</p>
                    <Link to='/contact' className='btnS'></Link>
                </div>
                <div className='cardA'>
                    <h3></h3>
                    <span className='barS'></span>
                    <p className='btcS'></p>
                    <p><button><b><h3>12+ certification Diploma programs</h3></b></button></p>
                    <p>RMC Lingo provides its learners with certified training programs. We have over 12+ diploma courses to choose from. Spearhead your career with fast paced-learning and growth-oriented approach. Escalate your career with RMC Lingo’s certified courses and gear up your professional skills by assimilating assets and growth-oriented approach. Level up your skills by enrolling in our language certification programs.
</p>
                    <Link to='/contact' className='btnS'></Link>
                </div>
                   
            </div>
        </div>
    )
}

export default Boxmodel;
