import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    
    const {name, img, seller, ratings, price} = props.product;
    const {handelAddToCart} = props
    
    return (
        <div className='product'>
            <img src={img} alt="shoe" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={() => handelAddToCart(props.product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;