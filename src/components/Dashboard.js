import React, { useState } from 'react'
import Header from './Header'
import Cards from './Cards'
import Overview from './Overview'
import Modal from './Modal'

const totalFollowers = '23,004'

const mediaInfo = [
  {
    media: 'facebook',
    account: '@nathanf',
    followers: {
      total: 1987,
      today: 12
    }
  },
  {
    media: 'twitter',
    account: '@nathanf',
    followers: {
      total: 1044,
      today: 99
    }
  },
  {
    media: 'instagram',
    account: '@realnathanf',
    followers: {
      total: 11000,
      today: 1099
    }
  },
  {
    media: 'youtube',
    account: 'Nathan F.',
    followers: {
      total: 8239,
      today: -144
    }
  }
]

const Dashboard = props => {
  const [showModal, setShowModal] = useState(false)

  function handleModal(bool) {
    setShowModal(bool)
  }

  return (
    <>
      <Header totalFollowers={totalFollowers} {...props} />
      <Cards handleModal={handleModal} mediaInfo={mediaInfo} />
      <Overview handleModal={handleModal} />
      {showModal && <Modal handleModal={handleModal} />}
    </>
  )
}

export default Dashboard
