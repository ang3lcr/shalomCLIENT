import React from 'react'
import ringImg from '../assets/images/ring.png'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='main' id='home'>
        <div className="second-container">
        <div className="phrase-container">
            <p className="phrase1">"Joyas <span className="special-text">unicas</span> para</p>
            <p className="phrase2">momentos <span className="special-text">inolvidables</span>"</p>
            <p className="bottom-phrase">Alta joyeria</p>
        </div>
        <div className="image-container">
            <img src={ringImg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Home