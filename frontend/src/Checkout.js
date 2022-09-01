import React from 'react'
import './Checkout.css'
import ads from './Images/ads.jpg'
import Total from './Total';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
          <img className='checkout-icon' src={ads}/>
        <div>
          <h3>Hello,{user?.email}</h3>
            <h2 className='checkout-title'>Your Cart</h2>
            {basket.map(item=>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
        </div>
          <div className='checkout-right'>
            <Total/>
            <h2></h2>
          
        </div>
    </div>
    
  )
}

export default Checkout;