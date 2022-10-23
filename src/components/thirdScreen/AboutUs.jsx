import React from 'react'
import './aboutus.css'
import img1 from '../../assets/pexels-max-vakhtbovych-5998051 1.png'
import img2 from '../../assets/pexels-max-vakhtbovych-6492403 1.png'
import img3 from '../../assets/pexels-houzlook-com-3356416 2.png'
import img4 from '../../assets/pexels-oleg-zaicev-4834891 1.png'

const thumbData = [
    {
        width: '400px',
        height: '266.99px',
        marginTop: "-70px"
       
    },
    {
        width: '500px',
        height: '333.74px',
        marginTop: "50px"
    },
    {
        width: '400px',
        height: '359px',
        marginTop: "80px"
    },
    {
        width: '500px',
        height: '422px',
        marginTop: "58px"
    }
]

const AboutUs = () => {
  return (
    <div className='aboutContainer'>        
        <h1 className='aboutTitle'>
            About Us
        </h1>
        <p>
            Allow us to tell you a short story...
        </p>
        <div className='topThhumbContainer'>
            <div className='thumbContainer'>
                <div className='thumb' style={thumbData[0]}>
                    <img src={img1} alt='' />
                    <div className='thumbCaption thm1'>
                        <h3>Chapter I</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                    </div>
                </div>
                <div className='thumb' style={thumbData[2]}>
                    <img src={img3} alt='' />
                    <div className='thumbCaption thm3'>
                        <h3>Chapter III</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                    </div>
                </div>            
            </div>
            <div className='thumbContainer'>
                <div className='thumb mob' style={thumbData[1]}>
                    <img src={img2} alt='' />
                    <div className='thumbCaption thm2'>
                        <h3>Chapter II</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                    </div>
                </div>
                <div style={{height: "20px"}}></div>
                <div className='thumb mob' style={thumbData[3]}>
                    <img src={img4} alt='' />
                    <div className='thumbCaption thm4'>
                        <h3>Chapter IV</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutUs