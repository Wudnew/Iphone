import React from 'react'
import mac from "./images/home/mac-laptop.jpg"
import {Link } from 'react-router-dom';
 function Mac_laptop() {
  return (
    <div>
    
      <section className="main-highlight-wrapper">
    <div className="internal-wrapper">
        <div className="model">
            16-inch model
        </div>
        <div className="product-title">
            MacBook Pro
        </div>
        <div className="breif-description">
            The best for the brightest
        </div>
        <div className="link-wrapper">
            <ul>
                <li><Link href="#">Learn more</Link></li>
                <li><Link href="#">Buy</Link></li>
            </ul>
        </div>
        <div className="main-image-wrapper">
            <img src={mac} alt="" />
        </div>


    </div>

</section>
    </div>
  )
}
export default Mac_laptop;