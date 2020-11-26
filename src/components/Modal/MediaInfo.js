import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useDirectionFollowers from '../../utils/useDirectionFollowers'
import iconFollowers from '../../utils/iconFollowers'

const MediaInfo = props => {
  const {
    followers: { total, pastTenDays, today }
  } = props
  return (
    <Container>
      <Information followers={total} text={`Total Followers`} />
      <Information
        icon={true}
        followers={pastTenDays}
        text={` New followers in the past 10 days`}
      />
      <Information icon={true} followers={today} text={`New followers TODAY`} />
    </Container>
  )
}

MediaInfo.propTypes = {
  followers: PropTypes.object
}

const Information = ({ icon, followers, text }) => {
  const direction = useDirectionFollowers(followers)

  return (
    <InformationContainer>
      {icon && <Icon>{iconFollowers(direction)}</Icon>}
      <NumberFollowers direction={icon && direction}>{followers}</NumberFollowers>
      <Text>{text}</Text>
    </InformationContainer>
  )
}

Information.propTypes = {
  icon: PropTypes.bool,
  followers: PropTypes.number,
  text: PropTypes.string
}

const Container = styled.div`
  padding: 2% 5% 2% 5%;
  padding-top: 2%;
  padding-left: 6%;
  width: 100%;
  background: ${({ theme }) => theme.backgroundSecond};
  color: ${({ theme }) => theme.colorThemeText};

  display: flex;
  flex-wrap: wrap;
`

const InformationContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 10px;
  width: 180px;
`

const NumberFollowers = styled.div`
  font-size: 2.3em;
  font-weight: bold;
  margin-right: 15px;
  color: ${({ theme, direction }) =>
    direction === 'up' ? theme.up : direction === 'down' ? theme.down : theme.text};
`

const Icon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5px;
`

const Text = styled.p`
  font-size: 0.8em;
  margin: 0;
`

export default MediaInfo
