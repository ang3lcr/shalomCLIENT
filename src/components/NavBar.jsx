
import { useState } from 'react'
import '../styles/navbar.css'
import logoImg from '../assets/images/whitelogo.png'
import {Link } from 'react-router-dom'
import {faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartSideBar from './CartSideBar'

function MyNavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
            <Link to="products">Ver Productos</Link>
            </li>
            <li>
            <Link to="login"><FontAwesomeIcon icon={faUser}/></Link>
            </li>
            <li>
            <Link onClick={handleShow}><FontAwesomeIcon icon={faCartShopping}/></Link>
            </li>
        </ul>
    </div>
    <CartSideBar show={show} handleClose={handleClose}/>
</div>
  )
}
       
      

export default MyNavBar
