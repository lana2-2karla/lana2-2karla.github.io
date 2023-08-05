import React from 'react'
import '../global.css'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

function Home () {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default Home
