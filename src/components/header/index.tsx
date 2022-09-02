import Logo from '../../assets/logo.svg'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { PersonalizedButton, PersonalizedHeader } from './styles'
import { NavLink } from 'react-router-dom'

interface PropsTheme {
  toggleTheme?(): void
}

export function Header({ toggleTheme }: PropsTheme) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <PersonalizedHeader
        position="static"
        sx={{ height: '4rem', justifyContent: 'center' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a>
              <img src={Logo} alt="" />
            </a>
          </Typography>

          <NavLink to="/">
            <PersonalizedButton>ReactPrime</PersonalizedButton>

          </NavLink>

          <NavLink to="/materialui">
            <PersonalizedButton>Material-Ui</PersonalizedButton>
          </NavLink>
        </Toolbar>
      </PersonalizedHeader>
    </Box>
  )
}