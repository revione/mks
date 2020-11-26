import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Status from '../Status'

import selectIcon from '../../utils/selectIcon'
import adjustFollowers from '../../utils/adjustFollowers'

const data = [
  {
    title: 'Page Views',
    media: 'facebook',
    followers: 87,
    percent: 3
  },
  {
    title: 'Likes',
    media: 'facebook',
    followers: 52,
    percent: -2
  },
  {
    title: 'Likes',
    media: 'instagram',
    followers: 5462,
    percent: 2257
  },
  {
    title: 'Profile Views',
    media: 'instagram',
    followers: 52000,
    percent: 1375
  },
  {
    title: 'Retweets',
    media: 'twitter',
    followers: 117,
    percent: 303
  },
  {
    title: 'Likes',
    media: 'twitter',
    followers: 507,
    percent: 553
  },
  {
    title: 'Likes',
    media: 'youtube',
    followers: 107,
    percent: -19
  },
  {
    title: 'Total Views',
    media: 'youtube',
    followers: 1407,
    percent: -12
  }
]

const Overview = props => {
  return (
    <div>
      <MainTitle>Overview - Today</MainTitle>
      <ContainerCards>
        {data.map((card, i) => {
          return <Card key={i} {...card} {...props} />
        })}
      </ContainerCards>
    </div>
  )
}

Overview.propTypes = {}

const MainTitle = styled.h2`
  font-size: 1.4em;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colorThemeText};
`

const Card = props => {
  const { title, media, followers, percent, handleModal } = props

  function handleOpenModal() {
    handleModal(true)
  }

  return (
    <Container onClick={handleOpenModal}>
      <ContentUp>
        <Title>{title}</Title>
        <Icon>
          <img src={selectIcon(media)} alt={`icon ${media}`} />
        </Icon>
      </ContentUp>
      <ContentDown>
        <div>{adjustFollowers(followers)}</div>
        <Status followers={percent} text='%' />
      </ContentDown>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  media: PropTypes.string,
  followers: PropTypes.number,
  percent: PropTypes.number,
  handleModal: PropTypes.func
}

const ContainerCards = styled.div`
  padding: 2px 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 26px;
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 28px 28px 16px 21px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.cardBackgroundHover};
  }
`

const ContentUp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`

const Title = styled.div`
  color: ${({ theme }) => theme.textFirst};
  font-size: 0.8em;
  font-weight: bold;
`

const Icon = styled.div`
  img {
    width: 18px;
  }
`

const ContentDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;

  div:first-child {
    font-size: 2em;
    font-weight: bold;
  }
`

export default Overview
