import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/cart.css'
import getConfig from '../utils/getConfig';
import getUserId from '../utils/getUserId';
import axios from 'axios';


const CartSideBar = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  let MXN = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
})








const purchase = () => {
  axios.post("https://shalomapi-production.up.railway.app/api/v1/purchase", getUserId(), getConfig())
    .then(res => {
      alert("Compra realizada");
      window.location.reload(false);
    })
    .catch(error => {
     
      console.error(error);
    });
}

  let total = 0
  cart.map(product => (
    total += product.sub_total
  ))

  return (
    <div className={`CartSideBar ${show ? 'show' : ''}`}>
      <div className="close-button" onClick={handleClose}>
        <FontAwesomeIcon icon={faCircleXmark} className='exit-button'/>
      </div>
      <ul className="products-in-cart">
        {cart.map((product) => (
          <li className="product-in-cart" key={product.product.id}>
                <p className='product-cart-quantity'>
                  x{product.quantity}
                </p>
               <img src={product.product.product_image} alt="" className="resize-img" />
           <div className="product-cart-data">
             <p className='product-cart-name'>
             {product.product.name}
            </p> 
            <p className='product-cart-subtotal'>
              {MXN.format(product.sub_total)}
            </p>
            </div>
          </li>
        ))}
      </ul>
      <div className='total-cart'>
        <p>Total:</p>
        <p>
          {MXN.format(total)}
        </p>
      </div>
      <div className='button-container'>
        <button className='purchase-button' onClick={purchase}>
          <FontAwesomeIcon icon={faBagShopping}/>
        </button>
      </div>
    </div>
  );
};

export default CartSideBar;
    
          
          
          
