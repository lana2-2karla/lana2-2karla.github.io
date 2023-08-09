import React from 'react'
import './Timeline.css'

function Timeline () {
  return (
    <div id="experiences" className="experience-timeline">
      <h3>Experiências</h3>
      <div className="line"></div>
      <div className="experience">
        <h4>2021 - 2022</h4>
        <p>Desenvolvimento de habilidades Full Stack</p>
      </div>
      <div className="line"></div>
      <div className="experience">
        <h4>2023 (fev - maio)</h4>
        <p>Experiência como Auxiliar de Automação na SalaryFits</p>
      </div>
      <div className="line"></div>
      <div className="experience">
        <h4>Momento atual</h4>
          <p>Curso Análise e Desenvolvimento de Sistemas em andamento</p>
      </div>
    </div>
  )
}

export default Timeline
