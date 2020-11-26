import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Status from '../Status'
import Line from './Line'
import selectIcon from '../../utils/selectIcon'
import adjustFollowers from '../../utils/adjustFollowers'

const Card = props => {
  const { media = 'facebook', account = '@nathanf', followers = {}, handleModal } = props

  function handleOpenModal() {
    handleModal(true)
  }

  return (
    <Container className='card' onClick={handleOpenModal}>
      <Line media={media} />
      <Account>
        <img src={selectIcon(media)} className='App-logo' alt='logo' />
        <span className='tag-name'>{account}</span>
      </Account>
      <TotalFollowers className='number-followers'>
        <span>{adjustFollowers(followers.total)}</span>
        <div className='text-followers'>FOLLOWERS</div>
      </TotalFollowers>

      <Status followers={followers.today} text='Today' />
    </Container>
  )
}

Card.propTypes = {
  media: PropTypes.string,
  account: PropTypes.string,
  followers: PropTypes.object,
  handleModal: PropTypes.func
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  grid: 1;
  padding-bottom: 25px;

  &:hover {
    background-color: ${({ theme }) => theme.cardBackgroundHover};
  }
`

const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 17px;

  img {
    margin-right: 8px;
    width: 18px;
  }

  span {
    font-size: 0.7em;
    font-weight: bold;
    color: ${({ theme }) => theme.textFirst};
  }
`

const TotalFollowers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 24px;

  span {
    font-size: 3em;
    letter-spacing: 2px;
    margin-bottom: 3px;
    font-weight: bold;
  }

  div {
    font-size: 0.7em;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.textFirst};
  }
`

export default Card
