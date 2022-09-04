import { DataTable } from 'primereact/datatable'
import Card from '@mui/material/Card'
import styled from 'styled-components'

export const Image = styled.img`
  max-width: 5rem;
  min-width: 3rem;
  height: 5rem;
  //box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `

export const PersonalizedGrid = styled(DataTable)`
  .p-datatable-wrapper {
    height: calc(100vh - 13rem)
  }

  `

export const PersonalizedCard = styled(Card)`
  height: calc(100vh - 4rem);

  .row-accessories {
      background: #FF2934 !important;
      color: #F6F6F9 !important;
  }
`