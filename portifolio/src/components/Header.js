import React from 'react'
import './Header.css'
import githubSvg from '../assets/github.svg'
import linkedinSvg from '../assets/linkedin.svg'
import logoSvg from '../assets/logo.svg'

function Header () {
  return (
    <div className="header">
      <div className="left">
        <div>
          <img src={logoSvg} alt="logo" className="svg-img-logo" />
        </div>
        <p className="portfolio-tab">Portfólio</p>
      </div>
      <div className="center">
        <p className="tab">Projetos</p>
        <p className="tab">Sobre Mim</p>
        <p className="tab">Tecnologias</p>
      </div>
      <div className="right">
        <img src={githubSvg} alt="github" className="svg-img-github" />
        <img src={linkedinSvg} alt="linkedin" className="svg-img-linkedin" />
      </div>
    </div>
  )
}

export default Header
