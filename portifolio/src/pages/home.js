import React from 'react'
import Box from '@mui/material/Box'
import ResponsiveHeader from '../components/Header'
import '../global.css'

function Home () {
  return (
    <Box
      sx={{
        bgcolor: 'hsla(0, 0%, 0%, 1)'
      }}>
        <ResponsiveHeader />
    </Box>
  )
}

export default Home
