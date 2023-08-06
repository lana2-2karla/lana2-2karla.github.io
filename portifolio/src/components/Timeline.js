import React from 'react'
import './Timeline.css'

function Timeline () {
  return (
    <div id="experiences" className="experience-timeline">
      <h2>Experiências</h2>
      <div className="line"></div>
      <div className="experience">
        <h3>2021</h3>
        <p>Started my journey in web development</p>
      </div>
      <div className="line"></div>
      <div className="experience">
        <h3>2022</h3>
        <p>Worked as a front-end developer in XYZ Company</p>
      </div>
      <div className="line"></div>
      <div className="experience">
        <h3>2023</h3>
        <p>Currently expanding skills in mobile app development</p>
      </div>
    </div>
  )
}

export default Timeline
