import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SwitchTheme from './SwitchTheme'

const Header = props => {
  const { totalFollowers, toggleTheme } = props

  return (
    <Container>
      <div>
        <Title>Social Media Dashboard</Title>
        <Subtitle>Total Followers: {totalFollowers}</Subtitle>
      </div>
      <div>
        <SwitchTheme switchTheme={toggleTheme} />
      </div>
    </Container>
  )
}

Header.propTypes = {
  totalFollowers: PropTypes.string,
  toggleTheme: PropTypes.func
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  font-size: 1.633em; /** cambiar el tamaño */
`

const Subtitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.textFirst};
  font-size: 0.8em; /** cambiar el tamaño */
`

export default Header
