import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "./images/icons/logo.png"
import search from "./images/icons/search-icon.png"
import cart from "./images/icons/cart.png"


import { Link } from 'react-router-dom';

 function Header() {
  return (
    
     <div className="header-wrapper">
            <div className="inner-wrapper">
                <div className="header-link-wrapper">
                    <ul>
                        <li className="logo-link"><Link to="/"><img src={logo} alt="" /></Link></li>
                        <li><Link to="mac">Mac</Link></li>
                        <li><Link to="iphone">iPhone</Link></li>
                        <li><Link to="ipad">iPad</Link></li>
                        <li> <Link to="watch">Watch</Link></li>
                        <li><Link to="tv">TV</Link></li>
                        <li><Link to="misic"> Misic</Link></li>
                        <li><Link to="support">Support</Link></li>
                        <li className="search-link"><Link to="#"><img src={search} alt="" /></Link></li>
                        <li className="cart-link"><Link to="#"><img src={cart} alt="" /></Link></li>
                    
                    </ul>
                </div>
            </div>
        </div>  
  )
}

export default Header;