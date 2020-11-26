import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Line = ({ media = '' }) => <Container media={media}></Container>

Line.propTypes = {
  media: PropTypes.string
}

const Container = styled.div`
  height: 3px;
  width: 100%;
  margin-bottom: 26px;
  background: ${({ theme, media }) => theme[media]};
`

export default Line
