import React from 'react'
import '../styles/about.css'
import AboutBg from '../Images/about-bg.jpg' 

const About = () => {
  return (
    <section>
        <div className='about-container'>
            <div className='head-img'>
                <img src={AboutBg} ></img>
                <div className='img-text'>
                    <h1>About Us</h1>
                </div>   
            </div>

            <div className='story-container'>
                <div>
                    <div className=' flexColStart story-text'>
                        <h1 className='primaryText'>Vishwakruti Design Studio</h1>

                        <p><span className='orangeText'>Vishwakruti Design Studio</span>, we specialize in transforming homes, offices, and commercial spaces through expert interior design and architectural services. Our mission is to craft spaces that are both functional and visually stunning, tailored to your unique style and needs. From custom furniture and decor selection to lighting design, material choices, and renovation assistance, we handle every detail with precision. Whether it's creating architectural layouts, planning spaces, or implementing structural modifications, we ensure your space is both beautiful and practical.
                        </p>
                    </div>
                </div>

                <div className=' paddings testimonials'>
                    <span className='orangeText'>Testimonials</span>
                    <h1>Our Clients Words</h1>

                    <div className='testimonials-container'>
                        <div className='client-text'>
                            <p>
                            "Exceptional service and attention to detail! The Ghar dekho Properties went above and beyond to find us our dream home. Great expertise and professionalism." Their transparency and professionalism gave us peace of mind during the entire transaction. Highly recommended!"
                            </p>
                            <h5>Mr.Vikas</h5>
                        </div>

                        <div className='client-text'>
                            <p>
                            "Smooth and hassle-free experience from start to finish. The real estate company's knowledgeable team guided us through the entire process, ensuring we made informed decisions. Happy with your service and guiding us to get the best property in India.
                            </p>
                            <h5>Ms.Leena</h5>
                        </div>

                        <div className='client-text'>
                            <p>
                            "Interior designer description words, like artistic, are one of the words used in 
                            interior design to describe a wide style of 
                            décor which creates an unstructured and unique feel with mismatched elements."
                            </p>
                            <h5>Mr.Dipak</h5>

                        </div>

                    </div>
                </div>

            </div>
            


        </div>
    </section>

  )
}

export default About