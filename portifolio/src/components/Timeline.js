import React from 'react'
import './Timeline.css'

function Timeline () {
  return (
    <div id="experiences" className="experience-timeline">
      <h2>Experiências</h2>
      <div className="line"></div>
      <div className="experience">
        <h3>2021 - 2022</h3>
        <p>Desenvolvimento de habilidades Full Stack</p>
      </div>
      <div className="line"></div>
      <div className="experience">
        <h3>2023 (fev - maio)</h3>
        <p>Experiência como Auxiliar de Automação na SalaryFits</p>
      </div>
      <div className="line"></div>
      <div className="experience">
        <h3>Momento atual</h3>
          <p>Curso Análise e Desenvolvimento de Sistemas em andamento</p>
      </div>
    </div>
  )
}

export default Timeline
