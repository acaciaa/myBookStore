import React from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider';
import { getDocs,doc, onSnapshot, orderBy, collection, query,limit} from "firebase/firestore";
import {db} from './firebase';
import Order from './Order';
import { useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct';

function Orders() {
    const[{basket, user}, dispatch]=useStateValue();
    const[orders,setOrders]=useState([]); 
    
    
    useEffect(() => {
        
         if(user){
            
            const ordersRef = collection(db,"users", user?.uid, "orders")
            const q = query(ordersRef, orderBy("created", "desc"),limit(1))
             const orderRef = onSnapshot(q, snapshot => {
              
                setOrders(snapshot.docs.map((doc) => ({
                 id:doc.id,
                 data:doc.data()
            })))
             })
            
        }else{
            setOrders([])
        }
    }, [user])
   
     
   console.log(orders)
 
  return (
    <div className='orders' >
        <h1>Your Orders</h1>

      <div className='orders__order'>
           {orders?.map( order => (
              <Order order={order}/>
            ))}  
         
     
        </div> 
      
    </div>
  )
}

export default Orders
