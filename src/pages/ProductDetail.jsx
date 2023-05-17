import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { getProductsThunk } from '../store/slices/products.slice';
import '../styles/productindetail.css'
import { addToCartThunk } from '../store/slices/cart.slice';

const ProductDetail = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


 useEffect(() => {
    dispatch(getProductsThunk());
 }, [])

  const productsList = useSelector(state => state.products)
  const productInDetail = productsList.find(product => product.id == id)
  const relatedProducts = productsList.filter(product => product.category_id === productInDetail.category_id);

  const addToCart = (product) => {
    const data = {
        userId: Number(localStorage.getItem('userId')),
        productId: product, 
        quantity: 1,
    }
    console.log(data);
    dispatch(addToCartThunk(data))
 }


  return (
    <div className='ProductInDetail'>
      <div className="product-in-detail-container">
        <img src={productInDetail?.product_image} alt="" className='product-in-detail-image'/>
        <div className="product-in-detail-data">
          <h1 className='product-in-detail-title'>{productInDetail?.name}</h1>
          <p className="product-in-detail-description">
            {productInDetail?.description}
          </p>
          <div className="add-product-in-detail-to-cart">
            <button class="my-button" onClick={() => addToCart(productInDetail.id)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
      <div className="related-products">
        <h2 className="related-products-title">
          Productos relacionados
        </h2>
        <ul className='related-products-container'>
          {relatedProducts.map(product => (
            <li className='related-product' key={product.id}>
              <img src={product.product_image} alt="" className='product-related-resize' onClick={() => navigate(`/product/${product.id}`)}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductDetail