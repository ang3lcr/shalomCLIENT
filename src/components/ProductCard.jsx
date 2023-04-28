import React from 'react'
import '../styles/productCard.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProductCard = (props) => {

    let MXN = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })

    return (
        <div className='product-card123' id='product-card'>
            <div className="card">
                <div className="product-image">
                    <img src={props.productImage} alt="" />
                </div>
                <div className="content" id='product-content'>
                    <div className="product-name">
                        {props.name}
                    </div>
                    <div className="product-price">
                        {MXN.format(props.price)}
                    </div>
                </div>
                <button id='add-to-cart-button'>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>
    )
}

export default ProductCard