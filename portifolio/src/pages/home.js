/* eslint-disable no-trailing-spaces */
import React from 'react'
import '../global.css'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import OtherSkills from '../components/OtherSkills'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

function Home () {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <Projects />
      <br /> <br /> <br />
      <Timeline />
      <Technologies />
      <OtherSkills />
      <Footer />
    </div>
  )
}

export default Home
