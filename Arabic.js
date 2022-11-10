import React from "react";
import '../components/Arabic.css'
import arabman from "../assets/arabman.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Video from "./Video";
import market from "../assets/marketmiddleasr.jpg";

function Arabic() {
  return (
    <div>
        <Navbar></Navbar>
        <Video></Video>
        <div className="how-section1">
            <div className="row">
                <div className="col-md-6 how-img">
                    <img src={arabman} className=" img-fluid rounded-circle" alt="" />
                </div>
                <div className="col-md-6">
                    <h4>ARABIC LANGUAGE PROGRAM</h4>
                    <h4 className="subheading">About the Language</h4>
                    <h3 className="subheading">مرحبًا (Marhaba- hello)</h3>
                    <p className="text">
                    {" "}
                    Arab is a state of rich and varied cultural heritage. Right from
                    lovely handicrafts, to lip-smacking aromatic food, and plenty of
                    great literary work, Arab has in much more store for you other
                    than just oil wells. If you have the Arabic language, then you
                    have a lot of job options waiting for you. There are a lot of
                    industries that require Arabic speakers, and you can even work as
                    an interpreter. These days, interpreters are in high demand. In
                    this article, we will discuss some of the job options available
                    for Arabic speakers. RMC Lingo offers the best learning solutions
                    in foreign language, both offline and online mode.
                    </p>
                </div>
            </div>
            
        </div>
        <div className="how-section1">
            <div className="row">
                <div className="col-md-6">
                    <img src={market} className=" img-fluid  mh-100" alt="" />
                </div>
                <div className="col-md-6">
                    <h4>Why Learn Arabic?</h4>
                    
                    <p className="text">
                    Learning Arabic offers great business and career opportunities. Since the Middle East is witnessing an increasing growth in international affairs, there is a huge shortage of workers who are versed in Arabic language and culture. Those who study Arabic can find careers in diverse fields such as journalism, business & industry, education, finance, banking, translation & interpretation, consulting, foreign service and intelligence etc.

                    </p>
                </div>
            </div>
            
        </div>
        <Footer></Footer>
    </div>
  );
}
export default Arabic;
