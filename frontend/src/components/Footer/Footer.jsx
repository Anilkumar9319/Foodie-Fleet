import React from 'react'
import './Footer.css'
import { assets } from './../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='fot-logo' src={assets.logo} alt='' />
                <p>Same recipes are different when cooked by different chefs. Discover must-have kitchen gear for every home chef. Writing symphonies of delightful flavors
                Craving something delicious? Unlock access to my recipes  </p>
                <div className="footer-social-icons">
                    <a href='https://www.linkedin.com/in/jeeru-nithin-reddy-80586622b/' target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    
                </div>
            </div> 
            <div className="footer-content-center">
                <h2>COMPANY</h2>            
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-6302277098</li>
                    <li>Chintalaanilkumar1234@gmail.com</li>
                </ul>
            </div>   
        </div> 
        <hr/>
        <p className="footer-copyright">Copyright 2024 © ANIL_KUMAR™ - All rights Reserved.</p>     
    </div>
  )
}

export default Footer
