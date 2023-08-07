import React from 'react'
import './OtherSkills.css'

function OtherSkills () {
  const otherSkills = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase',
    'Django',
    'Swift'
    // Add more Skills here
  ]

  return (
      <section className="other-skills">
        <h2>Outras Skills</h2>
        <div className="skills-container">
          {otherSkills.map((technology, index) => (
            <div key={index} className="skills-card">
              <p>. {technology}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default OtherSkills
