import { useState, useEffect } from 'react'

export default function useDirectionFollowers(followers) {
  const [direction, setDirection] = useState('')

  useEffect(() => {
    if (followers === 0) {
      setDirection('')
    } else if (followers > 0) {
      setDirection('up')
    } else {
      setDirection('down')
    }
  }, [followers])

  return direction
}
