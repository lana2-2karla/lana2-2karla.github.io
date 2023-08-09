import React from 'react'
import './OtherSkills.css'

function OtherSkills () {
  const otherSkills = [
    'Métodos ágeis: [Scrum, Kanban]',
    'POO',
    'SOLID',
    'Vercel',
    'Conventional commits ',
    'Pesquisas com chatGPT'
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
