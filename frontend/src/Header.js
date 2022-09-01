import React from 'react'
import header from './Images/header.png'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
            <img className='headerLogo' src={header} alt='' />
        </Link>
        
        <div className='headerSearch'>
            <input className='headerInput'/>
                <SearchIcon className='headerSearchIcon'/>
        </div>
        <div className='headerNav'>
            <Link to={!user && '/login'} style= {{textDecoration: 'none'}}>
            <div onClick={handleAuthentication}
                className='headerOption'>
                <span className='headerOptionOne'>
                {user ? 'Sign Out':'Sign In'}
                </span>
            </div>
            </Link>
            <div className='headerOption'>
                <span className='headerOptionOne'>
                    Returns
                </span>

            </div>
            <Link to = '/orders' style= {{textDecoration: 'none'}}>
            <div className='headerOption'>
                <span className='headerOptionOne'>
                    Orders
                </span>  
            </div>
            </Link>
            <Link to='/checkout' style= {{textDecoration: 'none'}}>
            <div className='headerOption'>  
                <ShoppingBasketIcon/>
                <span className='headerOptionOne headerBasketCount'>{basket?.length}</span>
            </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header