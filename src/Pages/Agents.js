import React from 'react'
import '../styles/agent.css'
import agents from '../utils/agent.json'

const Agents = () => {
  return (
    <section className='residences'>
      <div className='ag-container'>

        <div className="ag-list">

          <h2>Our Agents</h2>

          <div className="agent">
            {agents.map(agent => (
              <div className="agent-card" key={agent.id}>
                <img src={agent.img} alt={agent.name} />
                <div className="agent-details">
                  <h3>{agent.name}</h3>
                  <p>{agent.description}</p>
                </div>
                <button className='button'>Know More</button>
              </div>
          ))
          }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Agents