import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import Header from './Header'
import MediaInfo from './MediaInfo'
import Chart from '../Chart'

const data = {
  media: 'facebook',
  account: '@nathanf',
  followers: { total: 1987, pastTenDays: 81, today: 12 },
  history: [
    {
      day: '4',
      followers: 3
    },
    {
      day: '5',
      followers: 2
    },
    {
      day: '6',
      followers: 6
    },
    {
      day: '7',
      followers: 8
    },
    {
      day: '8',
      followers: 9
    },
    {
      day: '9',
      followers: 10
    },
    {
      day: '10',
      followers: 9
    },
    {
      day: '11',
      followers: 10
    },
    {
      day: '12',
      followers: 12
    },
    {
      day: '13',
      followers: 12
    }
  ]
}

const Modal = props => {
  const { handleModal } = props

  function handleCloseModal() {
    handleModal(false)
  }

  return (
    <Background>
      <Container>
        <CloseModal onClick={handleCloseModal} />
        <Header {...props} {...data} />
        <MediaInfo followers={data.followers} />
        <Chart history={data.history} date='May 4 - May 13' />
      </Container>
    </Background>
  )
}

Modal.propTypes = {
  handleModal: PropTypes.func
}

// Create the keyframes
const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
// Background hehind modal
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.backgroundModal};
  z-index: 1;
  animation: ${rotate} 500ms linear;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.background};
  border-radius: 25px;

  width: 68%;
  max-height: 68%;
  overflow: auto;
`

const CloseModal = styled.button`
  width: 15px;
  height: 15px;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  right: 25px;
  top: 25px;

  &:after {
    content: '';
    height: 15px;
    border-left: 2px solid #666;
    position: absolute;
    transform: rotate(45deg);
    top: 0;
  }

  &:before {
    content: '';
    height: 15px;
    border-left: 2px solid #666;
    position: absolute;
    transform: rotate(-45deg);
    top: 0;
  }
`

export default Modal
