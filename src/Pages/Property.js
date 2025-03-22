import React from 'react'
import data from '../utils/slider.json'
import '../styles/property.css'
import {Link} from 'react-router-dom'


const Property = () => {
  return (
    <section className='residences'>
      <div className='flexColStart paddings pro-container'>

        <div className="-list">

          <h2>Architectural design
          </h2>

          <div className="agent">

            {data.map(pcard => (

               <div className=' flexColStart pro-card'>
               <img src={pcard.image} alt='home'></img>

           
               <span className='primaryText pro-name'>{pcard.name}</span>
               <span className='secondaryText pro-details'>{pcard.detail}</span>

               
             </div>

            ))
            }

          </div>
          
            
          </div>
        </div>
    </section>
  )
}

export default Property