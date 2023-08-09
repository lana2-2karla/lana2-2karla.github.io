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
            <h4 className='color-purple'>Quem sou</h4>
            <h2>Allana Karla</h2>
            <h3 className='color-grey'>Desenvolvedora Full Stack com foco em Back-end</h3>
            <br />
            <li>🌟 Apaixonada por tecnologia e entusiasta da literatura oriental,</li>
            <li>🎓 Formada em Desenvolvimento Web Full Stack na <a className='li-about' href="https://www.betrybe.com/formacao-desenvolvimento-web" target="_blank" rel="noopener noreferrer">Trybe</a>,</li>
            <li>📚 Cursando Análise e Desenvolvimento de Sistemas na <a className='li-about' href="https://www.uninter.com/graduacao-ead/curso-analise-e-desenvolvimento-de-sistemas/" target="_blank" rel="noopener noreferrer">Uninter</a>,</li>
            <li>🎯 Foco principal: back-end,</li>
            <li>💬 Pergunte-me sobre qualquer coisa, amo conversar e ajudar,</li>
            <li>⚡ Tecnologias em andamento: C# e .NET,</li>
            <li>🌈 Compilar: &quot;transformar sonhos em realidade virtual&quot;</li>
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
