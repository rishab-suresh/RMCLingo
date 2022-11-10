import React from 'react';
import B1 from '../assets/B1.jpeg';
import Spain from '../assets/spain.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import Video from './Video';
import SpainOffice from '../assets/SpainOffice.jpg';



function Spanish() {
  return(
    <div>
        <Navbar></Navbar>
        <Video></Video> 
        <div className="how-section1">
            <div className="row">
                <div className="col-md-6 how-img">
                    <img src={B1} className=" img-fluid" alt=""/>
                </div>
                <div className="col-md-6">
                    <h4>SPANISH LANGUAGE PROGRAM</h4>
                                <h4 className="subheading">About the Language</h4>
                <p className="text">Hola! As the world becomes more globalized, the need for bilingual and bicultural individuals is increasing. In the US, a huge demand exists for people who can speak other languages, especially Spanish. This is especially important since the US is located so close to Mexico. But what are the benefits of learning a language other than English? 
    RMC Lingo offers the best learning solutions in foreign language, both offline and online mode. </p>

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Why learns Spanish?</h4>
                                
                                <p className="text" >Realizing that Spanish is spoken in more than 21 countries, learning Spanish is a good choice and can open doors to numerous career opportunities. The largest Spanish investors in India are Cobra (engineering), the Duro Felguera Group (turnkey operations), Coinma (office furniture) and Agroalimen. Other Spanish companies that have a presence in India include Acciona (construction), Albertis (infrastructure), Aldeasa (duty free airport shops), Banco Sadabell, BBVA (bank), Cintra (toll road operator), Mondragón (a corporate cooperative in the Basque Country), Corte Ingles (retailing), Garrigues (law firm), Pascual Group (food), Keraben (ceramics), Mango (textiles), Mapfre Group (insurance), Taurus (home appliances) and Union Fenosa (electric power). </p>
                </div>
                <div className="col-md-6 how-img">
                    <img src={SpainOffice} className="rounded-circle img-fluid" alt=""/>
                </div>
            </div>
            <div className="row">
               
                <div className="col-md-6">
                    <h4>Career opportunities for Spanish speakers</h4>

                                <p className="text">Learning the Spanish language offers you numerous opportunities. You can work in many fields, including health care, tourism, and government. Spanish-speaking professionals are more sought-after by employers than non-speakers. You may even be able to land a job in an exotic location.
    Spanish is widely spoken in the Americas, the Caribbean, and parts of Europe. It is the first language of 400 to 450 million people. The language is now the second most popular language in the world, only behind Mandarin. In the past few years, the number of people who are learning Spanish has increased by 800 percent. It is now the third most searched language on the Internet.</p>
                </div>
                <div className="col-md-6 how-img">
                    <img src={Spain} className="rounded-circle img-fluid mh-400"  alt=""/>
                </div>
            </div>
            
            
        </div>
        <Footer></Footer>
    </div>
        
  );
}
export default Spanish;