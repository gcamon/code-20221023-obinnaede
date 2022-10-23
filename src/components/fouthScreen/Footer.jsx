import React from 'react'
import './footer.css'
import Logo from '../../assets/yourlogo2.png'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerHeader'>
            <div className='footerLeft'>
                <img src={Logo} alt=""/>
                <p>©  2021  Company Name<br/>
                All rights reserved</p>
            </div>
            <div className='footerRight'>
                <div>Explore</div>
                <div>About Us</div>
                <div>Cities</div>
                <div className='footerCall'>Call</div>
            </div>
        </div>
    </div>
  )
}

export default Footer