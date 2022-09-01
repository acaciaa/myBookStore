import React from 'react'
import './Total.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Total() {
  const navigate = useNavigate();
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='total'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                Subtotal({basket?.length} items):
                <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"₹"}
        />

        <button onClick={e =>navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Total