import React from 'react'
import Box from '@mui/material/Box'
import girlDeveloper from '../assets/girlDeveloper.svg'
import Typography from '@mui/material/Typography'

function AboutMe () {
  return (
    <Box maxWidth="xl" sx={{ color: '#92E3A9', mx: 'auto', width: '90%' }}>
      <img src={girlDeveloper} alt='girlDeveloper by vecteezy.com' />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          fontFamily: 'serif',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none'
        }}
      >
        Olá, meu nome é
      </Typography>
    </Box>
  )
}

export default AboutMe

// https://storyset.com/illustration/webinar/cuate
