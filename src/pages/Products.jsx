import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import axios from 'axios';
import '../styles/products.css'
import {motion} from 'framer-motion'
import Footer from '../components/Footer';
import logo from '../assets/images/whitelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/fontawesome-free-brands'




const Produts = () => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);

  
    useEffect(() => {
      dispatch(getProductsThunk())
      axios.get("https://shalomapi-production.up.railway.app/api/v1/categories")
      .then(res => setCategories(res.data))
    }, [])
    
    const productsList = useSelector(state => state.products);
    const [filteredProducts, setFilteredProducts] = useState(productsList);

    const filterProducts = (categoryId) => {
        let productsFiltered = productsList.filter(product => product.category_id == categoryId);
          setFilteredProducts(productsFiltered)
      }
    
    const showAll = () => {
      setFilteredProducts(productsList);
    }

    


    return (
    <div className='products' id='products'>
      <div className="menu-container">
        <ul className='categories-list'>
      <h2 className='categories-title'>Categorias</h2>
          {categories.map(category => (
            <li key={category.id} onClick={() => filterProducts(category.id)} style={{ cursor: "pointer" }} className='category'>{category.category}</li>
          ))}
        <p className='show-all-products' onClick={() => showAll()} style={{ cursor: "pointer" }}>Ver todos los productos</p>
        </ul>
      </div>
      <div className="products-card-container">
             {filteredProducts.map(product => (
                <ProductCard key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                productImage={product.product_image}
                stock={product.stock}
                id={product.id}
               />
             ))}
      </div>
    </div>
  )
}

    

export default Produts