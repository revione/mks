import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import styled from 'styled-components'

const Cards = props => {
  const { mediaInfo } = props
  return (
    <Container>
      {mediaInfo.map(cardInfo => (
        <Card key={Math.random() * 100} {...cardInfo} {...props} />
      ))}
    </Container>
  )
}

Cards.propTypes = {
  mediaInfo: PropTypes.array
}

const Container = styled.div`
  padding: 8px 0;
  margin-bottom: 35px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;

  @media screen and (min-width: 426px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 26px;
  }
`

export default Cards
