import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Switch from './Switch'

const switchThemeComponent = props => {
  const { switchTheme, themeActive = true, mode = 'Dark' } = props
  return (
    <Container>
      <StateMode>{mode} Mode</StateMode>
      <Switch onChange={switchTheme} cheked={themeActive} />
    </Container>
  )
}

switchThemeComponent.propTypes = {
  mode: PropTypes.string,
  switchTheme: PropTypes.func,
  themeActive: PropTypes.bool
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StateMode = styled.span`
  margin-right: 10px;
  font-size: 0.8em;
  font-weight: bold;
  color: ${({ theme }) => theme.textFirst};
`

export default switchThemeComponent
