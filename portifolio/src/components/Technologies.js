import React from 'react'
import './Technologies.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHtml5, faCss3Alt, faJs, faReact, faNode, faPython, faJava, faPhp, faAngular, faVuejs, faSwift, faSass } from '@fortawesome/free-brands-svg-icons'

function Technologies () {
  const technologies = [
    { name: 'HTML5', icon: 'faHtml5' },
    { name: 'CSS3', icon: 'faCss3Alt' },
    { name: 'JavaScript', icon: 'faJs' },
    { name: 'React', icon: 'faReact' },
    { name: 'Node.js', icon: 'faNode' },
    { name: 'Python', icon: 'faPython' },
    { name: 'Java', icon: 'faJava' },
    { name: 'PHP', icon: 'faPhp' },
    { name: 'Angular', icon: 'faAngular' },
    { name: 'Vue.js', icon: 'aVuejs' },
    { name: 'Swift', icon: 'faSwift' },
    { name: 'Sass', icon: 'faSass' }
  ]

  return (
    <div id="technologies" className="technologies">
      <h2>Tecnologias</h2>
      <br/><br/> <br/><br/>
      <div className="cardsIcon-container">
        {technologies.map((technology, index) => (
          <div key={index} className="card-icon">
            <p>{technology.icon}</p>
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technologies
