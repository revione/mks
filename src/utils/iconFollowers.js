import React from 'react'
import iconUp from '../images/icon-up.svg'
import iconDown from '../images/icon-down.svg'

export default function iconFollowers(direction) {
  switch (direction) {
    case 'up':
      return <img src={iconUp} alt='iconUp' />
    case 'down':
      return <img src={iconDown} alt='iconDown' />
    default:
      return null
  }
}
