import React, {useState,useEffect}from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import './Payment.css';
import { Link, useNavigate } from 'react-router-dom';
import{CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { doc, setDoc} from "firebase/firestore";
import {db} from './firebase';

function Payment() {
    let navigate = useNavigate();
    const[{basket, user}, dispatch]=useStateValue();

    const stripe=useStripe();
    const elements = useElements();

    const[error, setError]= useState(null);
    const[disabled, setDisabled] = useState(true);
    
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
   
    const handleChange=async (event)=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    const total = getBasketTotal(basket)*100;

    const handleSubmit=async ev =>{
         ev.preventDefault();
         setProcessing(true);
         const {clientSecret} = await fetch('https://thebookclub22.herokuapp.com/payments/create',{
            //https://thebookclub22.herokuapp.com/payments/create
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            amount:total,
            paymentMethodType:'card',
            currency:'inr',
          }),
         }).then(r=>r.json());
         console.log('the secret is',clientSecret)

 const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
      
    }).then(({paymentIntent})=>{
console.log(paymentIntent)

      try {
  
  const docRef = setDoc(doc(db,"users", user?.uid, "orders", paymentIntent.id), {
    basket: basket,
    amount: paymentIntent.amount,
    created: paymentIntent.created
  });
  console.log("Document written");
  
  } catch (e) {
  console.error("Error adding document: ", e);
  }

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type:'EMPTY_BASKET'
        })
        navigate('/orders')
    })      
}
    

  return (
    <div className="payment">
        <div className='payment-container'>
        <h1>
                Checkout(
                    <Link to='/checkout'>{basket?.length} items</Link>
                )
            </h1>
            {/* Payment section-delivery address */}
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment-address'>
                    <p>{user?.email}</p>
                    <p>Zuangtui, S-66</p>
                    <p>Aizawl,Mizoram</p>
                </div>
            </div>
            {/* Payment section-review items*/}
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment-items'>
                    {basket.map(item =>(
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
            {/*  Payment section-Payment method*/}
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment-details'>
                    {/* Stripe magic will go  */}

                    <form id='payment-form' onSubmit={handleSubmit}>
                        <CardElement id='card/element' onChange={handleChange}/>

                            <button disabled={processing || disabled ||succeeded}>
                                <span>{processing ? <p>Processing </p> : "Buy Now"}</span>
                            </button>
                    </form>
                        <div className='payment-priceContainer'>
                        <CurrencyFormat
                            renderText={(value)=>(    
                             <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} 
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                            
                        </div>
                        {/* Errors */}
                        {error && <div>{error}</div>}
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment