import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import selectIcon from '../../utils/selectIcon'

const Header = props => {
  const { media, account } = props

  return (
    <Container>
      <Title>Facebook Followers</Title>
      <Account>
        <img src={selectIcon(media)} className='App-logo' alt='logo' />
        <span className='tag-name'>{account}</span>
      </Account>
    </Container>
  )
}

Header.propTypes = {
  media: PropTypes.string,
  account: PropTypes.string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 32px 0;
  width: 100%;
  background: ${({ theme }) => theme.backgroundSecond};
  padding: 3% 5% 2% 5%;
  padding-top: 4%;
  padding-left: 6%;
  padding-bottom: 1%;
`

const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
  margin-bottom: 13px;
`

const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

export default Header
