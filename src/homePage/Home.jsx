import React from 'react'
import './home.css';
import Main from '../components/mainScreen/Main';
import Explore from '../components/secondScreen/Explore';
import AboutUs from '../components/thirdScreen/AboutUs';
import Footer from '../components/fouthScreen/Footer';

const Home = () => {
  return (
    <div className='container'>
        <Main />
        <Explore />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Home