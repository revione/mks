import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useDirectionFollowers from '../../utils/useDirectionFollowers'
import iconFollowers from '../../utils/iconFollowers'

const Status = ({ followers, text }) => {
  const direction = useDirectionFollowers(followers)

  return (
    <Container className='status' direction={direction}>
      <Icon>{iconFollowers(direction)}</Icon>
      <span>{Math.abs(followers)}</span>
      <span>{text}</span>
    </Container>
  )
}

Status.propTypes = {
  followers: PropTypes.number,
  text: PropTypes.string
}

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 0.62em;
  font-weight: bold;
  letter-spacing: 0.3px;
  color: ${({ theme, direction }) =>
    direction === 'up' ? theme.up : direction === 'down' ? theme.down : theme.text};

  span {
    margin: 0 0 0 2px;
  }
`

const Icon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Status
