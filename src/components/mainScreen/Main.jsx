import React from 'react'
import './main.css'
import logo from "../../assets/Your Logo.png"
import dropdown from "../../assets/drpdown.png"
import searchIcon from '../../assets/Vector1.svg'
import drpDown2 from '../../assets/drpDown2.png'
import lineBound from '../../assets/Vector2.svg'
import Menu from '../../assets/menu.png'

const Main = () => {
  return (
    <div className='main'>
        <div className='headerSection'>
            <div className='headerLeft'>
              <img src={logo} />
            </div>
            <div className='headerRight'>
                <div className='nav'>
                    <a href=''>Explore</a>
                </div>
                <div className='nav'>
                  <a href=''>About Us</a>
                </div>
                <div className='nav cities'>
                    <a href=''><span>Cities</span> <img src={dropdown} className="arrow"/></a>
                </div> 
                <div className='nav call'>
                    <a href=''>Call</a>
                </div>              
            </div>
            <div className='mobile'>
                <div className='menu'>
                    <img src={Menu} alt=''/>
                </div>
            </div>
        </div>
        <div className='middleSection'>   
            <div className='rethink'>
              <h1> <span>Rethink your</span>
              living & renting</h1>
            </div>   
            <h4 className='info'>
              Make your stay painless with us
            </h4> 
        </div>
        <div className='footerSection'>
            <div className='pallet'>
               <div className='palletInfo'>
                  <span>City</span>
                  <p>Select your city</p>
               </div>
            </div>
            <div className='pallet'>
                <div className='palletInfo'>
                  <span>Date</span>
                  <p>Select your dates</p>
                </div>
            </div>
            <div className='pallet'>
              <div className='palletInfo'>
                  <span>GUESTS</span>
                  <p>Add guests </p>
              </div>
            </div>
            <div className='pallet search'>
              <img src={searchIcon} alt=''/>
              <span>Search</span>
            </div>
        </div>
        <div className='drpDown'>
            <img src={drpDown2} alt=''/>
        </div>
        <img src={lineBound} alt="" className='divider'/>
    </div>
  )
}

export default Main