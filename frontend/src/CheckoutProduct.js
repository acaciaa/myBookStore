import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image,title,price,rating,hideButton}) {

    const [{basket,user},dispatch] = useStateValue();

    const removeFromCart = ()=>{
        //remove the product from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id,
        })
    }

  return (
    <div className='checkout-product'>
        <img className='checkout-product-image' src={image}/>

        <div className='checkout-product-info'>
            <p className='checkout-product-title'>{title}</p>
            <p className='checkout-product-price'>
                <strong>₹</strong>
                <strong>{price}</strong>
            </p>
            <div className='checkout-product-rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟</p>
                ))}
                </div>
                {!hideButton && (
                 <button onClick={removeFromCart}>Remove from Basket</button>
                )}
        </div>
    </div>
  )
}

export default CheckoutProduct