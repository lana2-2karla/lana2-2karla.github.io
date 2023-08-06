import React from 'react'
import './Header.css'
import githubSvg from '../assets/github.svg'
import linkedinSvg from '../assets/linkedin.svg'
import logoSvg from '../assets/logo.svg'

function Header () {
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="header">
        <div className="left">
            <div>
            <img src={logoSvg} alt="logo" className="svg-img-logo" />
            </div>
            <p className="portfolio-tab">Portfólio</p>
        </div>
        <div>
            <a href="#projects" onClick={(event) => handleLinkClick(event, 'projects')}>Projetos</a>
            <a href="#experiences" onClick={(event) => handleLinkClick(event, 'experiences')}>Experiências</a>
            <a href="#technologies" onClick={(event) => handleLinkClick(event, 'technologies')}>Tecnologias</a>
        </div>
        <div className="right">
            <img src={githubSvg} alt="github" className="svg-img-github" />
            <img src={linkedinSvg} alt="linkedin" className="svg-img-linkedin" />
        </div>
    </div>
  )
}

export default Header
