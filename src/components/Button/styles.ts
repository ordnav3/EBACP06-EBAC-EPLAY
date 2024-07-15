import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: solid 2px ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  border: solid 2px ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
