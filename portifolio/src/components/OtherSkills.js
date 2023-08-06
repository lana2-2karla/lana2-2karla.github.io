import React from 'react'
import './OtherSkills.css'

function OtherTechnologies () {
  const otherTechnologies = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase',
    'Django',
    'Swift'
    // Add more technologies here
  ]

  return (
      <section className="other-technologies">
        <h2>Outras Tecnologias e Skills</h2>
        <div className="technologies-container">
          {otherTechnologies.map((technology, index) => (
            <div key={index} className="technology-card">
              <p>. {technology}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default OtherTechnologies
