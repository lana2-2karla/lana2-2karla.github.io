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
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
