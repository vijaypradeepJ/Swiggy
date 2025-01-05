import React from 'react'
import './Footer.css'
import app1 from "../..//Images/play_store.avif"
import app2 from '../../Images/app_store.avif'
import logo from "../../Images/download.png"

function Mainfooter() {
  return (
    <footer> 
    <div className="footheader">
        <div className="header">
            <h2>for better experience ,download the swiggy app</h2>
        </div>
        <div className="applogo">
            <img src={app1} alt=""/>
            <img src={app2} alt=""/>
        </div>
   </div>
   <div className="footersection">
    <div className="footerdetails">
        <img src={logo} alt=""/>
        <p id="addrs">© 2024 Bundl Technologies Pvt. Ltd</p>
    </div>
    <div className="footerdetails">
        <h5>company</h5>
        <p>about</p>
        <p>creer</p>
        <p>team</p>
        <p>swiggy one</p>
        <p>swiggy instamart</p>
        <p>swiggy genie</p>
    </div>
    <div className="footerdetails">
        <div className="contact">
            <h5>contact us</h5>
            <p>help&support</p>
            <p>partner with us</p>
            <p>ride with us</p>
        </div>
        <div className="policy">
            <h5>legal</h5>
            <p>terms & conditions</p>
            <p>cookie policy</p>
            <p>privacy policy</p>
            <p>investor relations</p>
        </div>
    </div>
    <div className="footerdetails">
        <h5>we deliver to:</h5>
        <p>bangalore</p>
        <p>gurgaon</p>
        <p>hyderabad</p>
        <p>delhi</p>
        <p>mumbai</p>
        <p>pune</p>
    </div>
   </div>

</footer>
  )
}

export default Mainfooter