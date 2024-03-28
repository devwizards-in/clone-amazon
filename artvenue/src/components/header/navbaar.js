import React from 'react'
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';


const navbar = () => {
  return (
    <header>
      <nav>

        {/* this left side of navbar (logo) */}
        <div className='left'>
          <div className='navlogo' style={{}}>
            <NavLink to="/"> <img src='/assets/images/header/logo.png' alt='' /> </NavLink>    {/* logo */}
          </div>

          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>

        {/* this is right side of navbar */}
        <div className='right'>
           <div className="nav_btn">
            <NavLink to="/login"> <a href=""> signin </a> </NavLink>
           </div>
           <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
           </div>
           <Avatar className='avtar' />
        </div>
      </nav>
    </header>
  )
}

export default navbar