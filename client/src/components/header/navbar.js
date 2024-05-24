import React from 'react';
import { FaCartShopping } from "react-icons/fa";
import "./navbar.css";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

function Navbar() {
    const handleSearch = () => {
        // Handle search logic here
        window.location.href = "https://www.flaticon.com/free-icons/search";
    };

    return (
        <div className='taskbar'>
          <div className='bg1'>  
            <div className='logo'>
                <img src="/0139937c2f641ab61fd020844ccfd459.jpg" alt="logo" />
            </div>
          </div>
          <nav className="navbar ">
            <div className='name'> 
              <img src='/33e63d5adb0da6b303a83901c8e8463a.jpg' alt='logo' />
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </nav>
          
          <div className='heart'><FaRegHeart /></div>
          <div className='cart'><IoCart /></div>
          <div className='nav2'>
           <div className='arrival1'> <p>New Arrivals</p> </div>
           <div  className='arrival2'> <p>Men</p></div> 
           <div  className='arrival3'>  <p>Women</p></div> 
           <div className='arrival4'> <p>Apparel</p></div> 
           <div  className='arrival5'>  <p>Sale</p></div> 
           <div class="arrival6">
    <a href="#shop-section"><p>Trending</p></a>
  </div>
          </div>
          <div class="sale-container">
          <div classname="on"><h5>New</h5></div>
          <div classname="on"><p>Styles</p></div>
          <div classname="on"><p>on</p></div>
          <div classname="on"><p>Sale:</p></div>
          <div classname="on"><p>Up</p></div>
          <div classname="on"><p>to</p></div>
          <div classname="on"><p>40%</p></div>
          <div classname="on"><p>Off</p></div>
          
          

    </div>
          <div className='vio'>
              {/* Muted video loop */}
              <video autoPlay loop muted style={{ height: '520px', width: '1400px' }}>
                  <source src="/The Difference _ Sony A7siii Nike Spec Ad.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
          <div className='flexbox'>
          <a href="https://www.nike.com/retail/directory/india/delhi" class="findastore">Find a Store</a>
          <a href="https://www.nike.com/in/help/" class="findastore">Help</a>
            <div className='joinus'>Join Us </div>
            <a href="https://sneak3.vercel.app/" class="signin">Sign In</a>
            <div className='sign1'>|</div>
            <div className='sign2'>|</div>
            <div className='sign3'>|</div>
          </div>
          <div className='bg1'></div>
          <div className='textc'>
            <div className='text1'>The Next Generation Of Air Technology Is Here</div>
            <div className='text2'>AIR MAX DN</div>
            <div className='text3'>TRIPLE BLACK</div>
            <div className='text4'>Equipped with a revolutionary Dynamic Air Unit built to give you an energising sensation with every step.</div>
          </div>
          <div className='myButton'>Shop</div>
      
          <div className='vio2'>
              {/* Muted video loop */}
              <video autoPlay loop muted style={{ height: '520px', width: '1400px' }}>
                  <source src="/Dior Air Jordan 1 - Cinematic Sneaker Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
          <div className='text6'>OWN YOUR SUMMER </div>
          <div className='text7'>IN STYLE </div>
          <div className='text8'>Possibilities are in the air - inspiring you to make the most of the sunshine.Break the heat in these effortlessly cool fits. </div>
          <div className='myButton2' id="shop-section" class="myButton2">Shop</div>
          <footer class="custom-footer">
  <div class="custom-container">
  <div class="custom-column">
      <h3>COMPANY</h3>
      <p>About Nike</p>
      <p>News</p>
      <p>Careers</p>
      <p>Investors</p>
      <p>Sustainability</p>
    </div>
    <div class="custom-column">
      <h3>HELP</h3>
      <p>Get help</p>
      <p>Order Status</p>
      <p>Delivery</p>
      <p>Return</p>
     
    </div>
    <div class="custom-column">
      <h3>FIND A STORE</h3>
      <p>Become A Member</p>
      <p>Send Us Feedback</p>
    </div>
    <div class="custom-column">
      <h3>BECOME A MEMBER</h3>
      <p>Sign up for exclusive offers</p>
      <div class="template"></div>
      <p>Join Now</p>
    </div>
   
    
  </div>
  <div class="custom-horizontal-line"></div>
  <div class="custom-footer-bottom">
    <div class="custom-container">
    <div className='do'> <p>&copy; 2024 Nike, Inc. All rights reserved</p>
      </div>
    </div>
    
    <div class="custom-container">
     
    </div>
  </div>
 <div class="template">
    <div id="image-container" class="image-container">
        <div class="image-with-text">
            <a href="https://sneak4.vercel.app/">
                <img src="/air1.png" alt="Shoe Model 1"/>
            </a>
            <div class="text-overlay">Air Force </div>
        </div>
        <div class="image-with-text">
            <a href="https://sneak4.vercel.app/">
                <img src="/dunk-low-older-shoes-C7T1cx.png" alt="Shoe Model 2"/>
            </a>
            <div class="text-overlay">Dunk</div>
        </div>
        <div class="image-with-text">
            <a href="https://sneak4.vercel.app/">
                <img src="/blazer1.png" alt="Shoe Model 3"/>
            </a>
            <div class="text-overlay">Blazer</div>
        </div>
    </div>


</div>
<div className='text13'>Classics Spotlight</div>
</footer>



        </div>
    );
}

export default Navbar;
