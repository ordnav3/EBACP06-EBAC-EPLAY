import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: solid 2px
    ${(props) => (props.variant === 'primary' ? colors.blue : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.blue : 'transparent'};
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: solid 2px ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
