import React from 'react'
import '../styles/productCard.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { addToCartThunk } from '../store/slices/cart.slice'
import getUserId from '../../src/utils/getUserId'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const addToCart = (product) => {
        const data = {
            userId: Number(localStorage.getItem('userId')),
            productId: product, 
            quantity: 1,
        }
        console.log(data);
        dispatch(addToCartThunk(data))
     }

    let MXN = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })

    return (
        <div className='product-card123' id='product-card'>
            <div className="card">
                <div className="product-image">
                    <img src={props.productImage} alt="" onClick={() => navigate(`/product/${props.id}`)}/>
                </div>
                <div className="content" id='product-content'>
                    <div className="product-name">
                        {props.name}
                    </div>
                    <div className="product-price">
                        {MXN.format(props.price)}
                    </div>
                </div>
                <button id='add-to-cart-button' onClick={() => addToCart(props.id)}>
                    <FontAwesomeIcon icon={faCartPlus}/>
                </button>
            </div>
        </div>
    )
}

export default ProductCard