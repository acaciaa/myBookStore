import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {

  const [{basket},dispatch] = useStateValue();

  const addToBasket= ()=>{
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }

  return (
    <div className="product">
        <div className='productInfo'>
            <p>{title}</p>
            <p className='productPrice'>
                <strong>₹</strong>
                <strong>{price}</strong>
            </p>
            <div className='productRating'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                 <p>🌟</p>
                ))}
            </div>
        </div>
        <img src ={image} alt='image'/>
        <button onClick={addToBasket}>🛒Add to Cart </button>    
    </div>
  )
}

export default Product