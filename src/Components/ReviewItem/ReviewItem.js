import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleRemoveItem}) => {
    const {id, name, price, quantity, shipping, img} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details-container">
                <div className="review-details">
                    <p><small>Name: ${name}</small></p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete' onClick={() => handleRemoveItem(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;