import React from 'react'
import ringImg from '../assets/images/ring.png'
import '../styles/home.css'
import { motion } from 'framer-motion'
import videoBackground from '../assets/video/jewelry-background.mp4'

const Home = () => {
  return (
    <div className='main' id='home'>
      <video src={videoBackground} autoPlay loop muted className='video-background'></video>
        <div className="second-container">
        <motion.div animate={{y:100}} transition={{duration: 1}} className="phrase-container">
            <p className="phrase1">"Joyas <span className="special-text">unicas</span> para</p>
            <p className="phrase2">momentos <span className="special-text">inolvidables</span>"</p>
            <p className="bottom-phrase">Alta joyeria</p>
        </motion.div>
    </div>
    </div>
  )
}

export default Home