import React from 'react'
import './AboutMe.css'
import drawingSvg from '../assets/drawing.svg'

function AboutMe () {
  return (
    <section className="about-me">
      <div className="left">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className="btn">Learn More</button>
      </div>
      <div className="right">
        <img src={drawingSvg} alt="drawing" className="drawing-svg" />
      </div>
    </section>
  )
}

export default AboutMe