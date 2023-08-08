import React from 'react'
import './AboutMe.css'
import drawingSvg from '../assets/drawing.svg'
import CVFile from '../assets/currículo-desenvolvedora-full-stack-Allana-Justino.pdf'

function AboutMe () {
  const handleDownloadCV = () => {
    // Cria um elemento âncora para disparar o download
    const anchor = document.createElement('a')
    anchor.href = CVFile
    anchor.download = 'allana_justino_cv.pdf' // Altere o nome do arquivo baixado, se desejar
    anchor.click()
  }

  return (
    <section className="about-me">
        <div className="left-about">
            <h2>Sobre Mim</h2>
            <li>🌟 Apaixonada por tecnologia e entusiasta da literatura oriental,</li>
            <li>🎓 Formada em Desenvolvimento Web Full Stack na <a href="https://betrybe.com">Trybe</a>,</li>
            <li>📚 Cursando Análise e Desenvolvimento de Sistemas na <a href="https://betrybe.com">Uninter</a>,</li>
            <li>🎯 Meu foco principal: Fullstack,</li>
            <li>💬 Pergunte-me sobre qualquer coisa, adoro conversar e ajudar pessoas,</li>
            <li>⚡ Tecnologias em andamento: Next.js, Prisma ORM,</li>
            <li>🌈Uma frase: Só porque você não conhece, não significa que não exista</li>
            <br />
            <button className="btn" onClick={handleDownloadCV}>Baixar CV</button>
        </div>
        <div className="right-about">
            <img src={drawingSvg} alt="drawing" className="drawing-svg" />
        </div>
    </section>
  )
}

export default AboutMe
