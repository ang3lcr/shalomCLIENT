
import { useState } from 'react'
import '../styles/navbar.css'
import logoImg from '../assets/images/whitelogo.png'
import {Link } from 'react-router-dom'
import {faUser, faCartShopping, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartSideBar from './CartSideBar'
import axios from 'axios'
import getConfig from '../utils/getConfig'

function MyNavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');

  }


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
              <Link to="about">Sobre nosotros</Link>
            </li>
            <li>
            <Link to="products">Productos</Link>
            </li>
            <li>
            <Link to="login"><FontAwesomeIcon icon={faUser}/></Link>
            </li>
            <li>
            <Link onClick={handleShow}><FontAwesomeIcon icon={faCartShopping}/></Link>
            </li>
            <li>
            <Link onClick={logout}><FontAwesomeIcon icon={faRightFromBracket}/></Link>
            </li>
        </ul>
    </div>
    <CartSideBar show={show} handleClose={handleClose}/>
</div>
  )
}
       
      

export default MyNavBar
