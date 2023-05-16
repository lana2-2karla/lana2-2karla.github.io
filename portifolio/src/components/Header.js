import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const pages = ['Sobre Mim', 'Habilidades', 'Projetos', 'Linkedin', 'GitHub']
const pagesCenter = ['Sobre', 'Habilidades', 'Projetos']

function ResponsiveHeader () {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{ bgcolor: 'hsla(0, 0%, 0%, 1)' }}>
      <Container maxWidth="xl" sx={{ mx: 'auto', width: '90%' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: { md: 'space-evenly' } }}>
          <Box sx={{ flexGrow: 1, width: { xl: 1 / 3 } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <Box sx={{ color: '#828282' }}>LANA</Box>KARLA
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none', sm: 'flex' },
                flexGrow: 1,
                fontFamily: 'serif',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ color: '#828282' }}>LANA</Box>KARLA
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, width: { xl: 1 / 3 }, justifyContent: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', width: { xl: 1 / 3 } }}>
            {pagesCenter.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', pr: 5 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', width: { xl: 1 / 3 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pr: 2 }}>
              <LinkedInIcon />
              <Button
                key='Linkedin'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Linkedin
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <GitHubIcon />
              <Button
                key='GitHub'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveHeader
