import React from 'react'
// import {li} from 'react-bootstrap'
import '../styles/header.css'
import {Link} from 'react-router-dom'
import logo from '../Images/logo4.png'

const Header = () => {
  return (
    <section className='header'>
            <div className='flexCenter paddings h-container'>
         

                <div className='flexCenter h-menu'>
                    <a href=''>
                      <Link to="/Home"> Home</Link>
                    </a>

                    <a href='/Property'>
                      <Link to="/Property">Architectural design
                      </Link>
                    </a>

                    <a href='Agents'>
                      <Link to="/Agents">Interior design
                      </Link>
                    </a>

                    <a href='About'>
                      <Link to="/About">About Us</Link>
                    </a>

                    <a href='Contact'>
                      <Link to="/Contact">Contact Us</Link>
                    </a>
                    <a href='Contact'>
                      <Link to="/Contact">Landscape</Link>
                    </a>



{/*                     
                    { <button className='button'>
                        <a href='/'>
                          <Link to="/Login">Login In</Link>
                        </a>
                    </button> } */}
                </div>
                
            </div>
    </section>
  )
}

export default Header