import React from 'react'
import '../global.css'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'

function Home () {
  return (
    <div className="home">
      <Header />
      <AboutMe />
    </div>
  )
}

export default Home
