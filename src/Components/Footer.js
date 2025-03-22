import React from 'react'
import '../styles/footer.css'
import logo from '../Images/logo4.png'

const Footer = () => {
  return (
    <section className='flexCenter paddings innerwidth'>
        <footer className="footer">
          <div className="footer-inner">
            <p>&copy; Sai Todkar 2025  </p> 

            <nav className="footer-nav">
              <ul>
                <li><a href="#">  Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
            
          </div>     
        </footer>       
    </section>
  );
};

export default Footer