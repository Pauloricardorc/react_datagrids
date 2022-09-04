import { AppBar, Button } from '@mui/material'
import styled from 'styled-components'

export const PersonalizedHeader = styled(AppBar)`
  display: flex;
  justify-content: center;
  height: 4rem;
  background: '#0181FE';

  a {
    text-decoration: none;
  }
`

export const PersonalizedButton = styled(Button)`
  position: relative;
  font-size: 0.8rem;
  color: #FFFFFF !important;
  
  &::after {
    content: '';
    position: absolute;
    width: 10%;
    height: 2px;
    left: 47%;
    bottom: 0;
    background-color: #F6F6F9;
    box-shadow: 0 -1px 5px #355dd7;
    transition: 0.2s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }
  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0%;
    bottom: 0;
    background-color: #F6F6F9;
    box-shadow: 0 -1px 5px #02C6FE;
    transition: 0.2s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }
`