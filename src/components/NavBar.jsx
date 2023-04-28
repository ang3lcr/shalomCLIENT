
import { useState } from 'react'
import '../styles/navbar.css'
import logoImg from '../assets/images/whitelogo.png'
import {Link } from 'react-router-dom'


function MyNavBar() {
  return (
    <div className="navBar">
      <div className='navbarcontainer'>
        <div className="aux">
            <div className="logo-container">
                <img src={logoImg} alt="" />
            </div>
        </div>
        <ul className='nav-bar-elements'>
            <li>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500}>Sobre nosotros</Link>
            </li>
            <li>
            <Link to="products" spy={true} smooth={true} offset={50} duration={500}>Productos</Link>
            </li>
            <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contacto</Link>
            </li>
            <li>
            <Link to="revies" spy={true} smooth={true} offset={50} duration={500}>Reviews</Link>
            </li>
        </ul>
    </div>
</div>
  )
}
       
      

export default MyNavBar
