import React from 'react'
import Box from '@mui/material/Box'
import ResponsiveHeader from '../components/Header'
import '../global.css'
import AboutMe from '../components/SectionAboutMe'

function Home () {
  return (
    <Box sx={{
      bgcolor: 'hsla(0, 0%, 0%, 1)'
    }}>
      <Box>
          <ResponsiveHeader />
      </Box>
      <AboutMe />
    </Box>
  )
}

export default Home
