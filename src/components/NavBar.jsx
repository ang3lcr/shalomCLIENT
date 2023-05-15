
import { useState } from 'react'
import '../styles/navbar.css'
import logoImg from '../assets/images/whitelogo.png'
import {Link } from 'react-router-dom'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MyNavBar() {



  return (
    <div className="navBar">
      <div className='navbarcontainer'>
        <div className="aux">
            <div className="logo-container">
              <Link to='/'>
                <img src={logoImg} alt="" />
              </Link>
            </div>
        </div>
        <ul className='nav-bar-elements'>
            <li>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500}>Sobre nosotros</Link>
            </li>
            <li>
            <Link to="products" spy={true} smooth={true} offset={50} duration={500}>Ver Productos</Link>
            </li>
            <li>
            <Link to="login" spy={true} smooth={true} offset={50} duration={500}><FontAwesomeIcon icon={faUser}/></Link>
            </li>
        </ul>
    </div>
</div>
  )
}
       
      

export default MyNavBar
