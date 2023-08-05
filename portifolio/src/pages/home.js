import React from 'react'
import '../global.css'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'

function Home () {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <Projects />
      <Technologies />
    </div>
  )
}

export default Home
