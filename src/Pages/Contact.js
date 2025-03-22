import React from 'react'
import '../styles/contact.css'
import contactImg from '../Images/contact-img.jpg'

const Contact = () => {
  return (
    <section>
        <div className='container'>
            <div className='contact-img'>
                <img src={contactImg} ></img>
                <div className='contact-img-text'>
                    <h1>Contact Us</h1>
                </div>   
            </div>

            <div className='contact-container'>
                <div className='contact-box'>
                    <h1>Address</h1>
                    <p>: 2nd Floor, Trimruti Apartment, S.No.2, Tilak Road, Sadashiv Peth,
                    Pune-411030</p>

                </div>

                <div className='contact-box'>
                    <h1>PHONE</h1>
                    <p>:+91 7028424912 </p>
                </div>

                <div className='contact-box'>
                    <h1>EMAIL</h1>
                    <p>
                     vishwakrutidesignstudio@gmail.com</p>
                </div>
            </div>

            <div className='contact-form'>
                <div className='form-content'>
                    <div className='form-text'>
                        <h4>Contact Us</h4>
                        <p> : 2nd Floor, Trimruti Apartment, S.No.2, Tilak Road, Sadashiv Peth,
                        Pune-411030</p>

                        <div>
                            <span>Contact Us</span><br/>
                            <span>+91 9876543210</span>
                        </div>

                    </div>
                    <div className='form'>
                        <input type='text' placeholder='Full Name'></input>
                        <input type='text' placeholder='Email'></input>
                        <input type='text' placeholder='mobile no'></input>
                        <input type='textarea' placeholder='Your message' rows="3" cols="2" ></input>

                    </div>


                </div>
                
            </div>
        </div>

    </section>
  )
}

export default Contact