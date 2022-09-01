import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js'
import{Elements} from '@stripe/react-stripe-js'
import Footer from './Footer';
import Orders from './Orders';

const promise = loadStripe('pk_test_51LaJb3SGGiTZZHJfQjnCCmVNBAgYe4ftaU38Qv6EO3iyw78kRvC9j3qrM62iqiBsgYF6YbfeOCKCqK9jMVAJnbHy00E7lk8xU7');
function App() {
   const[{}, dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('this is user',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
          dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
    }) 
  }, [])
  
  return (
    <Router>
      <div className="app">
         <Routes>
    <Route path="/checkout" element={<><Header/><Checkout/></>}/>
    <Route path="/login" element={<Login/>}/>
    
   <Route path="/payment" element=
   {
   <>
     <Header/>
     <Elements stripe={promise}>
     <Payment/>
     </Elements>
    </>}/>
  

  <Route path='/orders' element={<><Header/><Orders/></>} />
  <Route path="/" element={<><Header/><Home/><Footer/></>}/>
  </Routes>
   
    </div>
    </Router>
  );
}

export default App;
