import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products, initCart} = useLoaderData();
    const [cart, setCart] = useState(initCart);

    const handleRemoveItem = (id) => {
        const remainingProducts = cart.filter(product => product.id !== id);
        setCart(remainingProducts);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;