import React,{useState} from 'react'
import './Login.css'
import header from './Images/header.png'
import { Link , useNavigate} from 'react-router-dom';
import {auth} from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    
  const signIn = e =>{
    e.preventDefault();

    
      signInWithEmailAndPassword(auth,email,password)
      .then((auth) =>{
        navigate('/')
      })
      .catch(error =>alert(error.message))
    //some fancy firebase login
  }
  const register = e =>{
    e.preventDefault();

   
      createUserWithEmailAndPassword(auth,email, password)
      .then((auth)=>{
        //it successfully created a new user with the email and password
        console.log(auth);
        if(auth){
          navigate('/')
        }
      })
      .catch(error =>alert(error.message))
    //some fancy firebase register

  }

    

  return (
    <div className='login'>
        <Link to='/'>
        <img  className='login-logo' src={header} />
        </Link>

        <div className='login-container'>
            <h1>Sign In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=> setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn}
                className='login-signIn-btn'>Sign In</button>
            </form>

            <p>
            Your personal data will be used to support your experience throughout this website,
             to manage access to your account, 
             and for other purposes described in our privacy policy.
            </p>

            <button onClick={register} className='login-create-btn'>Create Account</button>
        </div>
    </div>
  )
}

export default Login