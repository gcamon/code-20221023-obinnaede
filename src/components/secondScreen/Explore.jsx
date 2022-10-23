import React from 'react'
import './explore.css'
import imgUrl from '../../assets/pexels-dmitry-zvolskiy-2082087 1.png'
import imgUrl2 from '../../assets/pexels-naim-benjelloun-2029670 1.png'

const roomData = [
    {
        imgUrl: imgUrl,
        desc: "Room with one king-size bed",
        prize: "35$",
        size: "28m²"
    },
    {
        imgUrl: imgUrl2,
        desc: "Penthouse for 8 person",
        prize: "2039$",
        size: "438m²"
    }

]

const Explore = () => {
  return (    
    <div className='exploreContainer'>
        <h1 className='exploreTitle'>
            Explore
        </h1>
        <p>
            From one-guest rooms to <br/>penthouses with pools and gardens
        </p>
        <div className='roomsContainer'>
            { roomData.map((item,index) => (
                <Rooms imgUrl={item.imgUrl} desc={item.desc} size={item.size} prize={item.prize} index={index}/>
            ))}
        </div>
    </div> 
  )
}

const Rooms = ({ imgUrl, desc, size, prize, index}) => (    
    <div className='roomInfo' key={index}>
        <img src={imgUrl} alt=""/>
        <div className='roomInfoPallet'>
            <p>{desc}</p>  
            <div className='desc'>                              
                <div>
                    {prize}
                </div>
                <div>
                    {size}
                </div>                
            </div>
            <button>Book!</button>
        </div>
    </div>
)

export default Explore